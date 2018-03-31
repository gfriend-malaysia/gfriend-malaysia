    self.addEventListener('install', function(event) {
      console.log('Service worker installing...');
      // TODO 3.4: Skip waiting
    });

    self.addEventListener('activate', function(event) {
      console.log('Service worker activating...');
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
    });

    self.addEventListener('fetch', function(event) {
      console.log('Fetching:', event.request.url);
    });