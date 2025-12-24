// sw.js - The Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

// This listens for a "push" event (we'll simulate this with a timer for now)
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    // Opens the app when the notification is clicked
    event.waitUntil(clients.openWindow('/')); 
});
