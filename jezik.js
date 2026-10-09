// Prijevodi (hr / en) i prebacivanje jezika. Odabrani jezik pamti se u pregledniku.
const R = {
  hr: {
    title_app: 'Edi Barbershop', tab_pocetna: 'Početna', tab_usluge: 'Usluge', tab_termini: 'Termini', tab_postavke: 'Postavke',
    prijava: 'Prijava', registracija: 'Registracija', naruci: 'Naruči termin',
    posjeti: 'Posjeti nas', otvori_kartu: 'Otvori u kartama', radno_h: 'Radno vrijeme',
    r_pon: 'Ponedjeljak – Petak', r_sub: 'Subota', r_ned: 'Nedjelja', r_zatvoreno: 'Zatvoreno',
    usluge_h: 'Usluge i cijene', u1: 'Fade šišanje', u2: 'Uređivanje brade', u3: 'Šišanje i brada', u4: 'Pranje kose',
    termini_h: 'Moji termini', tab_buduci: 'Budući', tab_prosli: 'Prošli',
    nema_buducih: 'Trenutno nemate rezervacija.', nema_proslih: 'Nemate prošlih termina.',
    termini_prijava: 'Prijavi se da vidiš svoje termine.', ne_mogu: 'Ne mogu učitati termine.',
    otkazi: 'Otkaži', potvrdi_otkaz: 'Otkazati termin {d} u {v}?', u_vrijeme: '{d} u {v}',
    postavke_h: 'Postavke', p_profil: 'Korisnički profil', p_racun: 'Moj račun', p_oapp: 'O aplikaciji', p_odjava: 'Odjavi me', p_obrisi: 'Obriši račun',
    potvrdi_odjavu: 'Jesi li siguran da se želiš odjaviti?',
    natrag: 'Natrag', lbl_ime: 'Ime', lbl_tel: 'Broj mobitela', spremi: 'Spremi promjene', podaci_ok: 'Podaci su spremljeni.',
    spremanje_greska: 'Spremanje nije uspjelo, pokušaj ponovno.',
    lbl_email: 'Email', promijeni_lozinku: 'Pošalji link za novu lozinku', racun_info: 'Poslat ćemo ti email s linkom za postavljanje nove lozinke.',
    oapp_tekst: 'Edi Barbershop – online naručivanje termina. Prijavi se, odaberi uslugu, dan i sat, a svoje termine uvijek možeš pregledati i otkazati.',
    oapp_kontakt: 'Za personalizirane aplikacije molimo kontaktirajte nas na WhatsApp ili Instagram.',
    prijavi_se: 'Prijavi se', napravi_racun: 'Napravi račun', registracija_h: 'Registracija',
    lbl_lozinka: 'Lozinka', lbl_lozinka6: 'Lozinka (min. 6 znakova)', lbl_lozinka2: 'Ponovi lozinku', zaboravljena: 'Zaboravljena lozinka',
    e_razlicite: 'Lozinke se ne podudaraju.', e_postoji: 'Račun s tim emailom već postoji, prijavi se.', e_slaba: 'Lozinka mora imati barem 6 znakova.',
    e_email: 'Email nije ispravan.', e_login: 'Pogrešan email ili lozinka.', e_ime: 'Upiši ime.',
    e_email_prvo: 'Upiši email pa klikni ponovno.', reset_ok: 'Poslali smo link za novu lozinku na {x}', reset_err: 'Ne mogu poslati email, provjeri adresu.',
    narudzba_h: 'Naruči termin', lbl_usluga: 'Usluga', opt_usluga: 'Odaberi uslugu', lbl_datum: 'Datum', lbl_vrijeme: 'Vrijeme',
    lbl_napomena: 'Napomena (neobavezno)', potvrdi: 'Potvrdi narudžbu',
    m_prvo_datum: 'Prvo odaberi datum', m_odaberi_sat: 'Odaberi sat', m_nedjelja: 'Nedjeljom ne radimo, odaberi drugi dan.',
    m_nema: 'Nema slobodnih termina za taj dan.', m_greska_ucit: 'Ne mogu učitati termine, pokušaj ponovno.',
    m_tel: 'Upiši pravi broj mobitela, npr. 091 234 5678.', m_hvala: 'Hvala, {ime}! Termin: {d} u {v}.',
    m_zauzet: 'Taj termin je zauzet ili je došlo do greške, odaberi drugi.',
    ucitavam: 'Učitavam…',
    obrisi_info: 'Brisanjem se trajno brišu tvoj račun, osobni podaci i svi tvoji termini. Ovo se ne može poništiti.',
    lozinka_potvrda: 'Lozinka (za potvrdu)', obrisi_gumb: 'Trajno obriši račun', odustani: 'Odustani',
    potvrdi_brisanje: 'Sigurno želiš trajno obrisati račun i sve svoje termine?', racun_obrisan: 'Račun je obrisan.',
    kriva_lozinka: 'Pogrešna lozinka.', brisanje_greska: 'Brisanje nije uspjelo, pokušaj ponovno.'
  },
  en: {
    title_app: 'Edi Barbershop', tab_pocetna: 'Home', tab_usluge: 'Services', tab_termini: 'Appointments', tab_postavke: 'Settings',
    prijava: 'Log in', registracija: 'Sign up', naruci: 'Book appointment',
    posjeti: 'Visit us', otvori_kartu: 'Open in Maps', radno_h: 'Opening hours',
    r_pon: 'Monday – Friday', r_sub: 'Saturday', r_ned: 'Sunday', r_zatvoreno: 'Closed',
    usluge_h: 'Services & prices', u1: 'Fade haircut', u2: 'Beard trim', u3: 'Haircut & beard', u4: 'Hair wash',
    termini_h: 'My appointments', tab_buduci: 'Upcoming', tab_prosli: 'Past',
    nema_buducih: 'You have no bookings right now.', nema_proslih: 'You have no past appointments.',
    termini_prijava: 'Log in to see your appointments.', ne_mogu: "Couldn't load appointments.",
    otkazi: 'Cancel', potvrdi_otkaz: 'Cancel the appointment on {d} at {v}?', u_vrijeme: '{d} at {v}',
    postavke_h: 'Settings', p_profil: 'User profile', p_racun: 'My account', p_oapp: 'About the app', p_odjava: 'Log me out', p_obrisi: 'Delete account',
    potvrdi_odjavu: 'Are you sure you want to log out?',
    natrag: 'Back', lbl_ime: 'Name', lbl_tel: 'Mobile number', spremi: 'Save changes', podaci_ok: 'Details saved.',
    spremanje_greska: 'Saving failed, please try again.',
    lbl_email: 'Email', promijeni_lozinku: 'Send password reset link', racun_info: "We'll email you a link to set a new password.",
    oapp_tekst: 'Edi Barbershop – online booking. Log in, choose a service, a day and a time, and you can always review or cancel your appointments.',
    oapp_kontakt: 'For a custom app of your own, contact us on WhatsApp or Instagram.',
    prijavi_se: 'Log in', napravi_racun: 'Create account', registracija_h: 'Sign up',
    lbl_lozinka: 'Password', lbl_lozinka6: 'Password (min. 6 characters)', lbl_lozinka2: 'Repeat password', zaboravljena: 'Forgot password',
    e_razlicite: 'Passwords do not match.', e_postoji: 'An account with this email already exists, please log in.', e_slaba: 'Password must be at least 6 characters.',
    e_email: 'Invalid email.', e_login: 'Wrong email or password.', e_ime: 'Enter your name.',
    e_email_prvo: 'Enter your email and click again.', reset_ok: "We've sent a password reset link to {x}", reset_err: "Couldn't send the email, check the address.",
    narudzba_h: 'Book an appointment', lbl_usluga: 'Service', opt_usluga: 'Choose a service', lbl_datum: 'Date', lbl_vrijeme: 'Time',
    lbl_napomena: 'Note (optional)', potvrdi: 'Confirm booking',
    m_prvo_datum: 'Choose a date first', m_odaberi_sat: 'Choose a time', m_nedjelja: "We're closed on Sundays, please choose another day.",
    m_nema: 'No free appointments on that day.', m_greska_ucit: "Couldn't load appointments, please try again.",
    m_tel: 'Enter a valid mobile number, e.g. 091 234 5678.', m_hvala: 'Thank you, {ime}! Appointment: {d} at {v}.',
    m_zauzet: 'That slot is taken or something went wrong, please choose another.',
    ucitavam: 'Loading…',
    obrisi_info: 'Deleting permanently removes your account, personal data and all your appointments. This cannot be undone.',
    lozinka_potvrda: 'Password (to confirm)', obrisi_gumb: 'Delete account permanently', odustani: 'Cancel',
    potvrdi_brisanje: 'Are you sure you want to permanently delete your account and all your appointments?', racun_obrisan: 'Account deleted.',
    kriva_lozinka: 'Wrong password.', brisanje_greska: 'Deletion failed, please try again.'
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
  document.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
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
