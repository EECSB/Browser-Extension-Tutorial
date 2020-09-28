window.addEventListener('load', (event) => {
    //When a message is received execute the receivedMessage function
    chrome.runtime.onMessage.addListener(receivedMessage);

    chrome.storage.sync.get(['color'], function(color) { 
        colorElements(color.color);
    });
});

function receivedMessage(message, sender, response){
    //When the message is received call and pass the value to the colorElements function.
    colorElements(message);
}

function colorElements(color){
    //Get elements.
    let list = document.getElementsByTagName("H2");
    //Color the elements.
    for(let element of list){
        element.style.color = color;
    }
}