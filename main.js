const words = ["1.5 degrees","2 degrees","adaptation","aerosol","afforestation","anthropocene","atmosphere","average temprature","biocar","biodiversity","bioenergy","biofuels","biosphere","black carbon aerosol","carbon cycle","carbon dioxide","carbon footprint","carbon neutrality","carbon offsetting","carbon pricing","climate change","climate negotiations","climate promise","co2","cop - conference of the parties","decarbonization","deforestation","desertification","developed countries","developing countries","disaster","disaster risk management","displacement","drought","dryland farming","early warning systems","earth","ecosystem","el ni\u00f1o - southern oscillation (enso)","emission pathways","emissions","emissions trading","energy efficiency","environment","equality","equity","extinction","extremen weather event","fairness","feedback loop","food security","food systems","fossil fuels","gdp","glaciers","global warming","green economy","green energy","green recovery","green transition","greenhouse effect","greenhouse gases","habitat","heatwave","indigenous knowledge","industrial revolution","industrialized countries","inequality","infrared","ipcc - intergovernmental panel on climate change","kyoto protocol","land surface air temperature","land use","land use change","least developed countries (ldcs)","methane","migration","millenium development goals","mitigation","natural gas","nature","ndc","negative emissions","net zero","ocean acidification","oceans","ozone layer","paris agreement","planet","plastics","polar","poverty","poverty eradication","pre-industrial","precipitation","purchasing power parity","radiation","recycling","reforestation","renewable energy","renewable energy","resilience","salinity","sea level rises","sea surface temperature","sequestration","small island developing states (sids)","social cost of carbon","soil carbon sequestration (scs)","stratosphere","stratosphere","sustainability","sustainable development goals","technology transfer","tipping point","transportation","tropical cyclone","unep","unfccc","united nations framework convention on climate change (unfccc)","vulnerability","well being","wildlife conservation"];
const spanClass = "__undp_term";


let activeSpan = undefined;


// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);





function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height,
    rect: rect
  };
}

function getWindowRect()
{
  let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;


  return {
    width: x,
    height: y,
    left: x + window.scrollX,
    top: y + window.scrollY,
    x: x + window.scrollX,
    y: y + window.scrollY
  };
}

function getBestPosition(bubbleRect, point, mouse)
{
  let windowRect = getWindowRect();
  // console.log("window rect", windowRect);

  // console.log("point", point, "mouse", mouse);

  // console.log("bubble", bubbleRect);

  let h = "left";
  if(point.x > windowRect.width - point.x)
  {
    h = "left";
  }
  else
  {
    h = "right";
  }

  let v = "top";
  if(point.y > windowRect.height - point.y)
  {
    v = "top";
  }
  else
  {
    v = "bottom";
  }


  return v + h;

}

function positionBubble(bubble, event)
{
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let bubbleRect = bubbleDOM.getBoundingClientRect();
  let bounds = getOffset(event.target);
  let x = mouseX;
  let y = mouseY;
  let nibHeight = 30;
  let nibWidth = 30;

  let offsetX = 10;
  let offsetY = 0;

  let position = getBestPosition(bubbleRect, bounds, {x:x, y:y});

  console.log("Bubble position: " + "%c" + position, "color:green;");

  let middlePoint = {x: bounds.x + (bounds.width/2), y: bounds.y + (bounds.height/2)};

  console.log("middle point", middlePoint);
  console.log("bounds", bounds);

  bounds.x = middlePoint.x;
  bounds.y = middlePoint.y;


  if(position == "bottomleft")
  {
    x = bounds.x - bubbleRect.width + nibWidth + offsetX;
    y = bounds.y + (bounds.height/2) + nibHeight;
  }
  else if(position == "bottom")
  {
    x = bounds.x - bubbleRect.width + nibWidth + offsetX;
    y = bounds.y + (bounds.height/2) + nibHeight;
  }
  else if(position == "bottomright")
  {
    x = bounds.x - nibWidth - offsetX;
    y = bounds.y + (bounds.height/2) + nibHeight;
  }
  else if(position == "topright")
  {
    x = bounds.x - nibWidth - offsetX;
    y = bounds.y - bubbleRect.height - nibHeight - (bounds.height/2);
  }
  else if(position == "top")
  {
    x = bounds.x - nibWidth - offsetX;
    y = bounds.y - bubbleRect.height - nibHeight - (bounds.height/2);
  }
  else
  {
    // position == "topleft"
    x = bounds.x - bubbleRect.width + nibWidth + offsetX;
    y = bounds.y - bubbleRect.height - nibHeight - (bounds.height/2);
  }


  console.log("FINAL position", {x: x, y: y});

  bubble.style.top = y + 'px';
  bubble.style.left = x + 'px';

  bubbleDOM.classList.remove('__undp_topleft');
  bubbleDOM.classList.remove('__undp_top');
  bubbleDOM.classList.remove('__undp_topright');

  bubbleDOM.classList.remove('__undp_bottomleft');
  bubbleDOM.classList.remove('__undp_bottom');
  bubbleDOM.classList.remove('__undp_bottomright');

  bubbleDOM.classList.add("__undp_" + position);
  console.log("%c-----------------------", "color:red;");
  console.log("%c-----------------------", "color:red;");
  console.log("%c-----------------------", "color:red;");
}


// Move that bubble to the appropriate location.
function renderBubble(event, selection) {

  if(bubbleDOM.classList.contains("active"))
  {
    bubbleDOM.classList.remove('active');
    setTimeout(function ()
    {
      renderBubble(event, selection);
    }, 300);
    return;
  }
  

  let mouseX = event.clientX;
  let mouseY = event.clientY;

  let term = whichTermIsIn(selection);
  let termCapped = term.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  var _html = '<div id="x"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L17 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 1L1 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  _html = _html + "<h3><span class='bracket'>[</span> " + termCapped + " <span class='bracket'>]</span></h3><p>" + "a document released by super smart people who usually know what the hell they're talking about." + "</p>";
  _html = _html + '<div class="__undp_nibble"><span></span></div>';
  bubbleDOM.innerHTML = _html;
  bubbleDOM.style.top = mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.classList.add('active');

  
  positionBubble(bubbleDOM, event);

  
  

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


function setupSpan(spanEl)
{

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
    span.classList.add(spanClass);
    setupSpan(span);
});
//
// END OF HACK 
//


document.addEventListener('click', function (event) {

  
  console.log("mouse click", {x:event.clientX, y:event.clientY});

  // let mouseX = event.clientX;
  // let mouseY = event.clientY;
  // let bubbleRect = bubbleDOM.getBoundingClientRect();
  // let bounds = getOffset(event.target);
  // let x = mouseX;
  // let y = mouseY;

  // bounds.x = x;
  // bounds.y = y;

  // let position = getBestPosition(bubbleRect, bounds, {x:x, y:y});


  // console.log("Best position: " + "%c" + position, "color:green;");


	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.' + spanClass)) return;

	// Don't follow the link
	//event.preventDefault();
  
	// Log the clicked element in the console

  if(activeSpan != undefined)
  {
    activeSpan.classList.remove("active");
  }
  event.target.classList.add('active');

  renderBubble(event, event.target.innerHTML);
  activeSpan = event.target;

  //event.stopPropagation();

}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (event) {

  if (event.target.matches('.' + spanClass) || event.target.matches('.selection_bubble')) return;
  //bubbleDOM.style.visibility = 'hidden';

  bubbleDOM.classList.remove('active');
  if(activeSpan != undefined)
  {
    activeSpan.classList.remove("active");
  }
  
}, false);