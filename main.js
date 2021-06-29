const words = ["1.5 degrees","2 degrees","adaptation","aerosol","afforestation","anthropocene","atmosphere","average temprature","biocar","biodiversity","bioenergy","biofuels","biosphere","black carbon aerosol","carbon cycle","carbon dioxide","carbon footprint","carbon neutrality","carbon offsetting","carbon pricing","climate change","climate negotiations","climate promise","co2","cop - conference of the parties","decarbonization","deforestation","desertification","developed countries","developing countries","disaster","disaster risk management","displacement","drought","dryland farming","early warning systems","earth","ecosystem","el ni\u00f1o - southern oscillation (enso)","emission pathways","emissions","emissions trading","energy efficiency","environment","equality","equity","extinction","extremen weather event","fairness","feedback loop","food security","food systems","fossil fuels","gdp","glaciers","global warming","green economy","green energy","green recovery","green transition","greenhouse effect","greenhouse gases","habitat","heatwave","indigenous knowledge","industrial revolution","industrialized countries","inequality","infrared","ipcc - intergovernmental panel on climate change","kyoto protocol","land surface air temperature","land use","land use change","least developed countries (ldcs)","methane","migration","millenium development goals","mitigation","natural gas","nature","ndc","negative emissions","net zero","ocean acidification","oceans","ozone layer","paris agreement","planet","plastics","polar","poverty","poverty eradication","pre-industrial","precipitation","purchasing power parity","radiation","recycling","reforestation","renewable energy","renewable energy","resilience","salinity","sea level rises","sea surface temperature","sequestration","small island developing states (sids)","social cost of carbon","soil carbon sequestration (scs)","stratosphere","stratosphere","sustainability","sustainable development goals","technology transfer","tipping point","transportation","tropical cyclone","unep","unfccc","united nations framework convention on climate change (unfccc)","vulnerability","well being","wildlife conservation"];


console.log("main.js is running");



// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
  var selection = window.getSelection().toString();

  console.log("is word a definition", isWordADefinition(selection));

  var txt = window.getSelection(),
    range = txt.getRangeAt(0),
    boundary = range.getBoundingClientRect();

  console.log("txt", txt);
  console.log("Range", range);
  console.log("Boundary", boundary);

  if(!isWordADefinition(selection)) return;
  if (selection.length > 0) {
    // renderBubble(e.clientX, e.clientY, selection);
    renderBubble(boundary.left, boundary.top, selection);
  }
}, false);


// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {

  let term = whichTermIsIn(selection);
  var _html = '<div id="x"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L17 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 1L1 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  bubbleDOM.innerHTML = _html + "<h3>\"" + term + "\"</h3><p>" + "a document released by super smart people who usually know what the hell they're talking about." + "</p>";
  bubbleDOM.style.top = mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';

}

function isWordADefinition(selection)
{
  let low = selection.toLowerCase();
  if(words.includes(low)) return true;
  let lows = low.split(" ");
  return words.some(r=> low.indexOf(r) >= 0);
}

function whichTermIsIn(selection)
{
  return words.find(term => selection.toLowerCase().indexOf(term) >= 0);
}


/*
 * Search for text in the window ignoring tags
 * 
 * Parameters:
 *     text: a string to search for
 *     backgroundColor: 
 *         "yellow" for example, when you would like to highlight the words
 *         "transparent", when you would like to clear the highlights
 * */
function doSearch(text, backgroundColor) {
  if (window.find && window.getSelection) {
    document.designMode = "on";
    var sel = window.getSelection();
    sel.collapse(document.body, 0);

    while (window.find(text)) {
      document.execCommand("HiliteColor", false, backgroundColor);
      sel.collapseToEnd();
    }
    document.designMode = "off";
  }
}


// START OF HACK - 
// The only way I could figure out how to add custom code to the <span>'s created by the HiliteColor command above was to 
// assign a random color to the background of the <span>'s and then go back and search for those spans and add custom classes to them

words.forEach(word => {
  doSearch(word, "rgba(1,1,1,0)");
});


// Get all spans
let spans = document.querySelectorAll('body span'); 

console.log("found spans: " + spans.length);
// Convert spans nodeslist to array
spans = Array.from( spans ); 
// Filter spans array
// Get CSS properties object of selected element - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
let arr = spans.filter( span => String( document.defaultView.getComputedStyle( span, null ).backgroundColor ) == 'rgba(1, 1, 1, 0)' );

// Change background color of matched span elements
arr.forEach( span => {
    span.style.backgroundColor = 'transparent';
    if (span.style.removeProperty) {
      span.style.removeProperty('background-color');
  } else {
    span.style.removeAttribute('background-color');
  }
    span.classList.add("undp_term");
});
//
// END OF HACK 
//
