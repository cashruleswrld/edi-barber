// Prijevodi (hr / en) i prebacivanje jezika. Odabrani jezik pamti se u pregledniku.
const R = {
  hr: {
    title_index: 'Edi Barbershop – Naruči termin', title_racun: 'Moji termini – Edi Barbershop',
    nav_usluge: 'Usluge', nav_naruci: 'Naruči termin', nav_kontakt: 'Kontakt', nav_moji: 'Moji termini',
    hero_h1: 'Svježe ošišan.<br>Bez čekanja.', hero_p: 'Odaberi uslugu, dan i sat. Termin je tvoj čim ga potvrdimo.', hero_btn: 'Naruči termin',
    usluge_h: 'Usluge i cijene', u1: 'Fade šišanje', u2: 'Uređivanje brade', u3: 'Šišanje i brada', u4: 'Pranje kose',
    narudzba_h: 'Naruči termin',
    treba_prijava: 'Za naručivanje termina prvo se prijavi ili napravi račun. Tako ćeš na jednom mjestu vidjeti i otkazati svoje termine.',
    prijava_gumb: 'Prijava / novi račun',
    lbl_ime: 'Ime', lbl_tel: 'Broj mobitela', lbl_usluga: 'Usluga', opt_usluga: 'Odaberi uslugu',
    lbl_datum: 'Datum', lbl_vrijeme: 'Vrijeme', lbl_napomena: 'Napomena (neobavezno)', potvrdi: 'Potvrdi narudžbu',
    footer_radno: 'Pon–Pet 10–20 h · Sub 10–18 h · Nedjeljom zatvoreno',
    m_prvo_datum: 'Prvo odaberi datum', m_odaberi_sat: 'Odaberi sat',
    m_nedjelja: 'Nedjeljom ne radimo, odaberi drugi dan.', m_nema: 'Nema slobodnih termina za taj dan.',
    m_greska_ucit: 'Ne mogu učitati termine, pokušaj ponovno.',
    m_tel: 'Upiši pravi broj mobitela, npr. 091 234 5678.',
    m_hvala: 'Hvala, {ime}! Termin: {d} u {v}.',
    m_zauzet: 'Taj termin je zauzet ili je došlo do greške, odaberi drugi.',
    m_kao: 'Naručuješ kao {ime} ({tel}). Podatke možeš promijeniti u „Moji termini“.',
    moj_racun: 'Moj račun', prijavi_se: 'Prijavi se', novi_racun: 'Napravi novi račun', natrag: 'Natrag',
    lbl_email: 'Email', lbl_lozinka: 'Lozinka', lbl_lozinka6: 'Lozinka (min. 6 znakova)',
    zaboravljena: 'Zaboravljena lozinka', napravi_racun: 'Napravi račun',
    moji_h: 'Moji termini', prijavljen_kao: 'Prijavljen kao {x}', naruci_novi: 'Naruči novi termin',
    nema_termina: 'Nemaš nadolazećih termina. Naruči prvi termin gumbom iznad.', ne_mogu: 'Ne mogu učitati termine.',
    otkazi: 'Otkaži', potvrdi_otkaz: 'Otkazati termin {d} u {v}?', u_vrijeme: '{d} u {v}',
    moji_podaci: 'Moji podaci', spremi: 'Spremi promjene', podaci_ok: 'Podaci su spremljeni.',
    spremanje_greska: 'Spremanje nije uspjelo, pokušaj ponovno.',
    obrisi_h: 'Obriši račun',
    obrisi_info: 'Brisanjem se trajno brišu tvoj račun, osobni podaci i svi tvoji termini. Ovo se ne može poništiti.',
    lozinka_potvrda: 'Lozinka (za potvrdu)', obrisi_gumb: 'Trajno obriši račun',
    potvrdi_brisanje: 'Sigurno želiš trajno obrisati račun i sve svoje termine?',
    racun_obrisan: 'Račun je obrisan.', kriva_lozinka: 'Pogrešna lozinka.', brisanje_greska: 'Brisanje nije uspjelo, pokušaj ponovno.',
    odjava: 'Odjava', odustani: 'Odustani',
    e_postoji: 'Račun s tim emailom već postoji, prijavi se.', e_slaba: 'Lozinka mora imati barem 6 znakova.',
    e_email: 'Email nije ispravan.', e_login: 'Pogrešan email ili lozinka.', e_ime: 'Upiši ime.',
    e_email_prvo: 'Upiši email pa klikni ponovno.', reset_ok: 'Poslali smo link za novu lozinku na {x}',
    reset_err: 'Ne mogu poslati email, provjeri adresu.'
  },
  en: {
    title_index: 'Edi Barbershop – Book an appointment', title_racun: 'My appointments – Edi Barbershop',
    nav_usluge: 'Services', nav_naruci: 'Book now', nav_kontakt: 'Contact', nav_moji: 'My appointments',
    hero_h1: 'Fresh cut.<br>No waiting.', hero_p: 'Choose a service, a day and a time. The appointment is yours as soon as we confirm it.', hero_btn: 'Book now',
    usluge_h: 'Services & prices', u1: 'Fade haircut', u2: 'Beard trim', u3: 'Haircut & beard', u4: 'Hair wash',
    narudzba_h: 'Book an appointment',
    treba_prijava: "To book an appointment, first log in or create an account. You'll be able to see and cancel your appointments in one place.",
    prijava_gumb: 'Log in / sign up',
    lbl_ime: 'Name', lbl_tel: 'Mobile number', lbl_usluga: 'Service', opt_usluga: 'Choose a service',
    lbl_datum: 'Date', lbl_vrijeme: 'Time', lbl_napomena: 'Note (optional)', potvrdi: 'Confirm booking',
    footer_radno: 'Mon–Fri 10–20 · Sat 10–18 · Closed on Sundays',
    m_prvo_datum: 'Choose a date first', m_odaberi_sat: 'Choose a time',
    m_nedjelja: "We're closed on Sundays, please choose another day.", m_nema: 'No free appointments on that day.',
    m_greska_ucit: "Couldn't load appointments, please try again.",
    m_tel: 'Enter a valid mobile number, e.g. 091 234 5678.',
    m_hvala: 'Thank you, {ime}! Appointment: {d} at {v}.',
    m_zauzet: 'That slot is taken or something went wrong, please choose another.',
    m_kao: 'Booking as {ime} ({tel}). You can change your details in “My appointments”.',
    moj_racun: 'My account', prijavi_se: 'Log in', novi_racun: 'Create new account', natrag: 'Back',
    lbl_email: 'Email', lbl_lozinka: 'Password', lbl_lozinka6: 'Password (min. 6 characters)',
    zaboravljena: 'Forgot password', napravi_racun: 'Create account',
    moji_h: 'My appointments', prijavljen_kao: 'Logged in as {x}', naruci_novi: 'Book a new appointment',
    nema_termina: 'You have no upcoming appointments. Book your first one with the button above.', ne_mogu: "Couldn't load appointments.",
    otkazi: 'Cancel', potvrdi_otkaz: 'Cancel the appointment on {d} at {v}?', u_vrijeme: '{d} at {v}',
    moji_podaci: 'My details', spremi: 'Save changes', podaci_ok: 'Details saved.',
    spremanje_greska: 'Saving failed, please try again.',
    obrisi_h: 'Delete account',
    obrisi_info: 'Deleting permanently removes your account, personal data and all your appointments. This cannot be undone.',
    lozinka_potvrda: 'Password (to confirm)', obrisi_gumb: 'Delete account permanently',
    potvrdi_brisanje: 'Are you sure you want to permanently delete your account and all your appointments?',
    racun_obrisan: 'Account deleted.', kriva_lozinka: 'Wrong password.', brisanje_greska: 'Deletion failed, please try again.',
    odjava: 'Log out', odustani: 'Cancel',
    e_postoji: 'An account with this email already exists, please log in.', e_slaba: 'Password must be at least 6 characters.',
    e_email: 'Invalid email.', e_login: 'Wrong email or password.', e_ime: 'Enter your name.',
    e_email_prvo: 'Enter your email and click again.', reset_ok: "We've sent a password reset link to {x}",
    reset_err: "Couldn't send the email, check the address."
  }
};

let lang = 'hr';
try { lang = localStorage.getItem('jezik') || 'hr'; } catch {}
if (!R[lang]) lang = 'hr';

export const jezik = () => lang;
export const t = (k, v = {}) =>
  (R[lang][k] ?? R.hr[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => v[n] ?? '');

export function primijeni() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(e => { e.innerHTML = t(e.dataset.i18n); });
  if (document.body.dataset.title) document.title = t(document.body.dataset.title);
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('aktivno', b.dataset.lang === lang));
}

export function postavi(l) {
  lang = l;
  try { localStorage.setItem('jezik', l); } catch {}
  primijeni();
  document.dispatchEvent(new Event('jezik'));
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => postavi(b.dataset.lang)));
primijeni();
