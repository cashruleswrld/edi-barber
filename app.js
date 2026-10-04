// Zajednički kod: spremanje termina + registracija aplikacije (PWA)
// NAPOMENA: termini se spremaju u localStorage, tj. samo u OVOM pregledniku/uređaju.
const Store = {
  KEY: 'termini',
  all() { try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch { return []; } },
  save(list) { localStorage.setItem(this.KEY, JSON.stringify(list)); },
  add(t) { const l = this.all(); l.push({ id: Date.now(), ...t }); this.save(l); },
  remove(id) { this.save(this.all().filter(t => t.id !== id)); },
  taken(datum, vrijeme) { return this.all().some(t => t.datum === datum && t.vrijeme === vrijeme); }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
