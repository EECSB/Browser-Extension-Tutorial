window.addEventListener('load', (event) => {
    //Initialize extension to the stored values.
    chrome.storage.sync.get(['color'], function(color) { 
        setColor(color.color);
    });

    document.getElementById("inputText").addEventListener("change", event =>{
        //Get color.
        const color = event.target.value;
        //Set color.
        setColor(color);
        //Save color.
        chrome.storage.sync.set({'color': color}, function(){});
    });
});

function setColor(color)
{
    //Display the selected color.
    document.getElementById("headingText").innerHTML = color;
    //Send color to web page in tab.
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, color);
    });
}