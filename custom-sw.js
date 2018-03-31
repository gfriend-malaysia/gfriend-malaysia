	console.error('self', self)

self.addEventListener('fetch', function(event) {
	console.error('event', event)
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			// Cache hit - return response
			if (response) {
				console.error('response', response)

				return response;
			}
			return fetch(event.request);
		})
	);
});
