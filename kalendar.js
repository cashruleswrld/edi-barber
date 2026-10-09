// Kalendar po mjesecima: klijent bira dan za termin, frizer gleda termine po danima.
// Opcije: loc() -> 'hr-HR' / 'en-GB', odabir(datum), onemoguci(datum) -> true/false,
// oznaka(datum) -> tekst značke (npr. broj termina), od / do -> 'YYYY-MM-DD' granice za strelice
export const ymd = d =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function kalendar(el, o) {
  let mj = new Date(); mj.setDate(1);
  let odabrani = '';
  const mjesec = d => d.slice(0, 7);

  function strelica(znak, smjer, oznaka) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'kal-strelica'; b.textContent = znak;
    b.setAttribute('aria-label', oznaka);
    const cilj = ymd(new Date(mj.getFullYear(), mj.getMonth() + smjer, 1));
    b.disabled = (smjer < 0 && o.od && mjesec(cilj) < mjesec(o.od)) || (smjer > 0 && o.do && mjesec(cilj) > mjesec(o.do));
    b.onclick = () => { mj.setMonth(mj.getMonth() + smjer); crtaj(); };
    return b;
  }

  function crtaj() {
    const loc = o.loc();
    el.classList.add('kalendar');
    el.innerHTML = '';
    const glava = document.createElement('div');
    glava.className = 'kal-glava';
    const naslov = document.createElement('strong');
    naslov.textContent = mj.toLocaleDateString(loc, { month: 'long', year: 'numeric' });
    glava.append(strelica('‹', -1, '‹'), naslov, strelica('›', 1, '›'));

    const mreza = document.createElement('div');
    mreza.className = 'kal-mreza';
    for (let i = 0; i < 7; i++) { // 1. 1. 2024. je ponedjeljak
      const s = document.createElement('span');
      s.className = 'kal-dan-ime';
      s.textContent = new Date(2024, 0, 1 + i).toLocaleDateString(loc, { weekday: 'short' });
      mreza.append(s);
    }
    const pomak = (mj.getDay() + 6) % 7; // tjedan počinje ponedjeljkom
    for (let i = 0; i < pomak; i++) mreza.append(document.createElement('span'));

    const danas = ymd(new Date());
    const dana = new Date(mj.getFullYear(), mj.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= dana; d++) {
      const dat = new Date(mj.getFullYear(), mj.getMonth(), d);
      const datum = ymd(dat);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'kal-dan'; b.textContent = d;
      b.setAttribute('aria-label', dat.toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long' }));
      b.setAttribute('aria-pressed', datum === odabrani);
      b.disabled = !!(o.onemoguci && o.onemoguci(datum));
      b.classList.toggle('danas', datum === danas);
      b.classList.toggle('odabran', datum === odabrani);
      const z = o.oznaka && o.oznaka(datum);
      if (z) { const s = document.createElement('small'); s.textContent = z; b.append(s); }
      b.onclick = () => { odabrani = datum; crtaj(); o.odabir(datum); };
      mreza.append(b);
    }
    el.append(glava, mreza);
  }

  crtaj();
  return {
    crtaj,
    odabrani: () => odabrani,
    postavi(datum) { // odabere dan (ili '' za ništa) i otvori njegov mjesec
      odabrani = datum;
      if (datum) { const [g, m] = datum.split('-'); mj = new Date(+g, +m - 1, 1); }
      crtaj();
    }
  };
}
