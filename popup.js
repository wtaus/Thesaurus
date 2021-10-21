function disableTerms() {
   
    chrome.runtime.sendMessage({command: "disable"});

    chrome.tabs.query({
        active: true,
        currentWindow: true
      }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {from: 'popup', subject: 'disable'},
            // ...also specifying a callback to be called 
            //    from the receiving end (content script).
            {});
      });

      
    window.close();
}
  
function closeWindow() {
   
    window.close();
}


window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    
  });



document.getElementById('clickme').addEventListener('click', disableTerms);
document.getElementById('x').addEventListener('click', closeWindow);