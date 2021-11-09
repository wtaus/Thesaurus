var show = function (elem) {
	elem.style.display = 'block';
};

var showFlex = function (elem) {
	elem.style.display = 'flex';
};

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

function disableTerms() {
   
    hide(document.getElementById('clickme'));
    showFlex(document.getElementById('preloader'));
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
            function(response) {

              console.log("done disable", response);
              window.close();
            });
      });

      
    // 
}
  
function closeWindow() {
   
    window.close();
}


// window.addEventListener('DOMContentLoaded', () => {
//     // ...query for the active tab...
    
//   });

hide(document.getElementById('preloader'));

document.getElementById('clickme').addEventListener('click', disableTerms);
document.getElementById('x').addEventListener('click', closeWindow);