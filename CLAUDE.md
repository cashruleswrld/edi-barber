# Edi Barbershop – upute za Claude

## Vlasnik projekta
Student, nije programer. Odgovaraj **na hrvatskom**, jednostavno, korak po korak (što kliknuti na GitHubu / u Firebaseu). Ne objašnjavaj kod ako ne pita.

## Što je projekt
PWA za naručivanje kod frizera "Edi Barbershop" (Gajeva ul. 29A, Zagreb, tel 091 618 1422, Instagram _barbershopedi).
- Stranica: https://cashruleswrld.github.io/edi-barber/ (GitHub Pages, grana `main`, root). Frizer: `/admin.html`.
- Čisti HTML/CSS/JS, bez build alata i bez npm-a u projektu.
- Radno vrijeme: pon–pet 10–20, sub 10–18, ned zatvoreno. Termini svakih 30 min (pon–pet 10:00–19:30, sub do 17:30).
- Cijene: fade 20 €, brada 15 €, šišanje+brada 30 €, pranje kose 3 €. Cijena je u nazivu usluge koji se sprema uz termin
  (npr. "Fade šišanje (20 €)"), pa stari termini pamte staru cijenu. Pri promjeni cijene promijeni `CIJENE` i `<option value>` u `index.html` te cjenik u `#v-usluge`.

## Fajlovi
- `index.html` – cijela klijentska aplikacija, hash rute (#pocetna #usluge #termini #postavke, podstranice #prijava #registracija #rezervacija #profil #racun #oaplikaciji #obrisi). Konstanta `INSTAGRAM`, `MAX_BUDUCIH = 2`.
- `admin.html` – frizer: kalendar (učitava samo prikazani mjesec), termini dana, povijest klijenta u `<dialog>`, gumbi Otkaži / Nije došao / Platio / Ipak je došao / Oprosti.
- `app.js` – Firebase (SDK 10.12.2 s gstatic CDN-a). Izvozi `Store`, `Profil`, `Auth`, `provjeriTel`, `cijena`, `satiDo`, `ROK_OTKAZA` (8 h).
- `kalendar.js` – zajednički kalendar (`kalendar(el, {loc, odabir, onemoguci, oznaka, od, do, naMjesec})`, `ymd`).
- `jezik.js` – prijevodi hr/en, `data-i18n`, `t()`. Svaki novi tekst dodaj u **oba** jezika.
- `style.css` – tamnosiva tema (pozadina #2b2a2b, kartice #363435), naglasak bijeli (`--naglasak`), greške jantarne (`--greska`), crvena samo za brisanje računa i kasni otkaz (`--crvena`).
- `firestore.rules` – pravila baze. **Ne primjenjuju se sama**: vlasnik ih ručno lijepi u Firebase konzolu.
- `sw.js` – service worker. **Pri svakoj izmjeni povećaj `CACHE`** (trenutno `edi-v20`); novi JS fajl dodaj u `FILES`.
- `racun.html` – samo preusmjerenje. `index_noviiiii_.html` – stari probni fajl, ne koristi se.

## Baza (Firestore, Spark besplatni plan; Auth samo email+lozinka)
- `slots/{datum_vrijeme}` – zauzeti sati (bez osobnih podataka).
- `termini/{datum_vrijeme}` – {ime, tel, usluga, datum, vrijeme, napomena, created, uid, [nijeDosao, podmireno]}.
- `termini/{datum_vrijeme}_k` – kasno otkazan termin (manje od 8 h prije): kopija + {otkazanKasno, nijeDosao: true, podmireno: false}.
- `dnevno/{uid}_{datum}` – osigurava najviše 1 termin u danu po osobi.
- `korisnici/{uid}` – {ime, tel}.
- Naručivanje je batch (slot + dnevno + termin). Frizer je prepoznat po emailu `bornapavicic85@gmail.com`.
- Neplaćen "nije došao" / kasni otkaz = dug; klijent ga vidi pri naručivanju, ne može obrisati taj termin ni račun dok frizer ne klikne "Platio".
- Paziti na limit od 50.000 čitanja dnevno: ne učitavati cijelu kolekciju `termini`.

## Odluke (ne predlagati ponovno)
Bez Telegram obavijesti, bez prijave Googleom/Appleom, bez Firebase Cloud Functions. Privacy policy možda kasnije; za podatke je odgovoran frizer.

## Kako radimo
1. Radi izmjene, testiraj u pregledniku (Playwright/Chromium je dostupan; Firebase zamijeni lažnim `app.js` preko `page.route`). Ako mijenjaš `firestore.rules`, testiraj ih u Firebase emulatoru.
2. Povećaj `CACHE` u `sw.js`, commitaj i pushaj na zadanu granu.
3. Vlasniku napiši: što se promijenilo, kako objaviti (GitHub: Compare & pull request → Create pull request → Merge pull request → Confirm merge, pa zelena kvačica na Actions), i što testirati.
4. Ako su se promijenila pravila: podsjeti ga da nakon mergea **kopira `firestore.rules` u Firebase → Firestore Database → Rules → Publish** (prvo spremi stara u Notepad).
5. Nakon objave: ugasiti i ponovno otvoriti aplikaciju (ili Ctrl + Shift + R).
