console.log("Loading Keyper content.js");

function handleKeydown(e) {
    console.log(e);
}

browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
    if (request.enable === true) {
        console.log('Enabling key capture')
        window.addEventListener('keydown', handleKeydown, false);
        sendResponse({success: true});
    } else if (request.enable === false) {
        console.log('Disabling key capture')
        window.removeEventListener('keydown', handleKeydown, false);
        sendResponse({success: true});
    }
});

