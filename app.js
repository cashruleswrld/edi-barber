// Zajednički kod: Firebase (baza + prijava) i registracija aplikacije (PWA)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, getDoc, setDoc, deleteDoc, writeBatch, getDocs, query, where, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, reauthenticateWithCredential, EmailAuthProvider, deleteUser, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp({
  apiKey: "AIzaSyCFNyjQYyqBgmwteiyvl0sztHdzNhv-Iw0",
  authDomain: "edi-barbershop.firebaseapp.com",
  projectId: "edi-barbershop",
  storageBucket: "edi-barbershop.firebasestorage.app",
  messagingSenderId: "842508579930",
  appId: "1:842508579930:web:d71ac9a5c8b16a23191463"
});
const db = getFirestore(app);
const auth = getAuth(app);

// "slots" = javno vidljivi zauzeti sati (bez imena), "termini" = pravi podaci (vidi ih samo frizer)
export const Store = {
  async takenOn(datum) {
    const s = await getDocs(query(collection(db, 'slots'), where('datum', '==', datum)));
    return new Set(s.docs.map(d => d.data().vrijeme));
  },
  async add(t) {
    const id = `${t.datum}_${t.vrijeme}`;
    const b = writeBatch(db);
    b.set(doc(db, 'slots', id), { datum: t.datum, vrijeme: t.vrijeme });
    const podaci = { ...t, created: serverTimestamp() };
    if (!auth.currentUser) throw new Error('Nisi prijavljen');
    podaci.uid = auth.currentUser.uid; // termin je uvijek vezan uz račun
    b.set(doc(db, 'termini', id), podaci);
    await b.commit(); // ako je termin već zauzet, cijela operacija ne uspije
  },
  async all() {
    const s = await getDocs(collection(db, 'termini'));
    return s.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async mine(uid) {
    const s = await getDocs(query(collection(db, 'termini'), where('uid', '==', uid)));
    return s.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async remove(id) {
    const b = writeBatch(db);
    b.delete(doc(db, 'slots', id));
    b.delete(doc(db, 'termini', id));
    await b.commit();
  }
};

// Provjera broja mobitela: hrvatski mobitel (091 234 5678, +385 91 234 5678) ili inozemni (+43 ...)
// Vraća očišćen broj ili null ako nije pravi broj
export function provjeriTel(v) {
  let t = String(v || '').trim().replace(/[\s\-\/().]/g, '');
  if (t.startsWith('00')) t = '+' + t.slice(2);
  if (/^\+385\d+$/.test(t)) t = '0' + t.slice(4);
  if (/^09[1-9]\d{6,7}$/.test(t)) return t;
  if (/^\+[1-9]\d{7,14}$/.test(t)) return t;
  return null;
}

// Osobni podaci klijenta (ime, mobitel) – vidi i mijenja ih samo vlasnik računa
export const Profil = {
  async get(uid) {
    const d = await getDoc(doc(db, 'korisnici', uid));
    return d.exists() ? d.data() : null;
  },
  async set(user, ime, tel) {
    await updateProfile(user, { displayName: ime });
    await setDoc(doc(db, 'korisnici', user.uid), { ime, tel });
  }
};

export const Auth = {
  login: (email, lozinka) => signInWithEmailAndPassword(auth, email, lozinka),
  register: async (email, lozinka, ime, tel) => {
    const c = await createUserWithEmailAndPassword(auth, email, lozinka);
    await Profil.set(c.user, ime, tel);
    return c;
  },
  user: () => auth.currentUser,
  // Briše termine, osobne podatke i sam račun (traži lozinku radi sigurnosti)
  obrisiRacun: async (lozinka) => {
    const u = auth.currentUser;
    await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, lozinka));
    for (const t of await Store.mine(u.uid)) await Store.remove(t.id);
    await deleteDoc(doc(db, 'korisnici', u.uid));
    await deleteUser(u);
  },
  reset: (email) => sendPasswordResetEmail(auth, email),
  logout: () => signOut(auth),
  onChange: cb => onAuthStateChanged(auth, cb)
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
