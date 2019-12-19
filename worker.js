console.log("service worker loaded");

self.addEventListener("push", function(event) {
    const data = event.data.json();
    console.log("Push recieved...");
    self.registration.showNotification(data.title, {
        body: 'Notified by Marcelo'
    });
});