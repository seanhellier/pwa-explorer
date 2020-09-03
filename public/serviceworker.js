const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Opened cache");

			return cache.addAll(urlsToCache);
		})
	);
});

// listen for requests
self.addEventListener("fetch", (event) => {});

// activate serviceworker
self.addEventListener("activate", (event) => {});
