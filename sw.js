const CACHE_NAME = "rangorde-v8";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

// Alle rang-afbeeldingen die de app kan tonen. Deze lijst wordt bij install
// geprobeerd te cachen zodat de app ook zonder internet werkt. Ontbrekende
// bestanden (nog niet toegevoegd aan images/) worden gewoon overgeslagen —
// dat mag de rest van de installatie niet blokkeren.
const IMAGE_ASSETS = [
  "./images/LandLuchtMarineOR1.png",
  "./images/LandOF1a.png",
  "./images/LandOF1b.png",
  "./images/LandOF2.png",
  "./images/LandOF3a.png",
  "./images/LandOF3b.png",
  "./images/LandOF4.png",
  "./images/LandOF5.png",
  "./images/LandOF6.png",
  "./images/LandOF7.png",
  "./images/LandOF8.png",
  "./images/LandOF9.png",
  "./images/LandOR2.png",
  "./images/LandOR3.png",
  "./images/LandOR4a.png",
  "./images/LandOR4b.png",
  "./images/LandOR5.png",
  "./images/LandOR6a.png",
  "./images/LandOR6b.png",
  "./images/LandOR7.png",
  "./images/LandOR8.png",
  "./images/LandOR9a.png",
  "./images/LandOR9b.png",
  "./images/LuchtOF1a.png",
  "./images/LuchtOF1b.png",
  "./images/LuchtOF2.png",
  "./images/LuchtOF3a.png",
  "./images/LuchtOF3b.png",
  "./images/LuchtOF4.png",
  "./images/LuchtOF5.png",
  "./images/LuchtOF6.png",
  "./images/LuchtOF7.png",
  "./images/LuchtOF8.png",
  "./images/LuchtOF9.png",
  "./images/LuchtOR2.png",
  "./images/LuchtOR3.png",
  "./images/LuchtOR4a.png",
  "./images/LuchtOR4b.png",
  "./images/LuchtOR5.png",
  "./images/LuchtOR6a.png",
  "./images/LuchtOR6b.png",
  "./images/LuchtOR7.png",
  "./images/LuchtOR8.png",
  "./images/LuchtOR9a.png",
  "./images/LuchtOR9b.png",
  "./images/MarineOF1a.png",
  "./images/MarineOF1b.png",
  "./images/MarineOF2.png",
  "./images/MarineOF3a.png",
  "./images/MarineOF3b.png",
  "./images/MarineOF4.png",
  "./images/MarineOF5.png",
  "./images/MarineOF6.png",
  "./images/MarineOF7.png",
  "./images/MarineOF8.png",
  "./images/MarineOF9.png",
  "./images/MarineOR2.png",
  "./images/MarineOR3.png",
  "./images/MarineOR4a.png",
  "./images/MarineOR4b.png",
  "./images/MarineOR5.png",
  "./images/MarineOR6a.png",
  "./images/MarineOR6b.png",
  "./images/MarineOR7.png",
  "./images/MarineOR8.png",
  "./images/MarineOR9a.png",
  "./images/MarineOR9b.png",
  "./images/MedicOF1a.png",
  "./images/MedicOF1b.png",
  "./images/MedicOF2.png",
  "./images/MedicOF3a.png",
  "./images/MedicOF3b.png",
  "./images/MedicOF4.png",
  "./images/MedicOF5.png",
  "./images/MedicOF6.png",
  "./images/MedicOF7.png",
  "./images/MedicOF8.png",
  "./images/MedicOF9.png",
  "./images/MedicOR2.png",
  "./images/MedicOR3.png",
  "./images/MedicOR4a.png",
  "./images/MedicOR4b.png",
  "./images/MedicOR5.png",
  "./images/MedicOR6a.png",
  "./images/MedicOR6b.png",
  "./images/MedicOR7.png",
  "./images/MedicOR8.png",
  "./images/MedicOR9a.png",
  "./images/MedicOR9b.png"

];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Kernbestanden: moeten lukken, anders faalt de installatie bewust.
      await cache.addAll(CORE_ASSETS);
      // Afbeeldingen: best-effort, ontbrekende bestanden worden overgeslagen.
      await Promise.allSettled(
        IMAGE_ASSETS.map(async (path) => {
          try {
            const res = await fetch(path);
            if (res && res.ok) await cache.put(path, res);
          } catch (e) {
            // bestand bestaat nog niet lokaal -> gewoon overslaan
          }
        })
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && event.request.method === "GET") {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
