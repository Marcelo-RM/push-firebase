//import { sendNotification } from "web-push";

const publicVapidKey =
    "BMAinI7w6i8C9SxMBurVEZ1qDy8gIx_dpvcqpqdQDB5EfwyyC5prhLDHQ3Fzi9lgjV21A2yTdDJXRHzjbs7dJZw";

// check for service worker
if ("serviceWorker" in navigator) {
    send().catch(err => console.error(err));
}

// register sw, register push, send push
async function send() {
    // Register service worker
    console.log("Registering service worker...");
    const register = await navigator.serviceWorker.register("worker.js", {
        scope: "/client/"
    });
    console.log("Service worker registered...");

    // Register push
    console.log("registering push...");
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log("push registered");

    //send push notification
    console.log("sending push...");
    await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "content-type": "application/json"
        }
    });
    console.log("Push sent...");
}

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
