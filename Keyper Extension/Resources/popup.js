console.log("Hello World!", browser);

//ref: https://stackoverflow.com/questions/36324333/refused-to-execute-inline-event-handler-because-it-violates-csp-sandbox
document.getElementById("enableButton").addEventListener("click", async function(e) {
    let tab = await browser.tabs.getCurrent()
    browser.tabs.sendMessage(tab.id, {enable: true}, function(response) {
        console.log("Received sendMessage response:", response);
    });
});

document.getElementById("disableButton").addEventListener("click", async function(e) {
    let tab = await browser.tabs.getCurrent()
    browser.tabs.sendMessage(tab.id, {enable: false}, function(response) {
        console.log("Received sendMessage response:", response);
    });
});

browser.runtime.sendMessage({message: "Hello from popup page"}, function(response) {
    console.log("Received sendMessage response:");
    console.log(response);
});
/*
 Captures key events into the extension pop up itself
window.addEventListener('keydown', function handleKeydown(e) {
    console.log(e);
}, false);
*/
