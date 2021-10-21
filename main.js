// Let's make the world a better place. And one way we can is to help educate people on what climate change is. This is an attempt.
// Please help end climate change. With love and good vibes, Travis Weerts 2021

const definitions = {"1.5 degrees":{"term":"1.5 Degrees","definition":"This one's important. The rise in temperature that we do not want to exceed."},"2 degrees":{"term":"2 Degrees","definition":"A global warming temperature increase that will have devastating effects on everything from farming to health. "},"adaptation":{"term":"Adaptation","definition":"The way we adjust to changing conditions in our environment. "},"aerosol":{"term":"Aerosol","definition":"Any physical solids or liquids that are in the air we breathe."},"afforestation":{"term":"Afforestation","definition":"Planting forests where there wouldn't naturally be any. "},"anthropocene":{"term":"Anthropocene","definition":"\"Sounds fancy, but this just refers to a new geological measure of time describing the most recent period of history where humans have had a devstatingly negative impact on the planet. \""},"anthropogenic":{"term":"Anthropogenic","definition":"This one is simpler than it sounds. It just refers to something that is caused by human activity. "},"atmosphere":{"term":"Atmosphere","definition":"\"The five layers of gases that surround Earth; from that closest that make up the air we breath, to the outer layer before entering space. \""},"biochar":{"term":"Biochar","definition":"A material made by heating biomass in a specific way that can then be used to reduce greenhouse gas emissions."},"biodiversity":{"term":"Biodiversity","definition":"All the plant and animal species in a particular area."},"bioenergy":{"term":"Bioenergy","definition":"Energy produced by natural and living materials. "},"biofuels":{"term":"Biofuels","definition":"\"A liquid fuel made from organic materials, such as biodiesel from plants like canola. \""},"biomass":{"term":"Biomass","definition":"The body or carcass of a plant or animal. "},"biosphere":{"term":"Biosphere","definition":"\"Up there in the air (the lithosphere, atmosphere and hydrosphere to be exact) there are living and dead organisms. This is referred to as the biosphere. \""},"black carbon aerosol":{"term":"Black Carbon Aerosol","definition":"A dangerous air pollutant that comes mostly from the incomplete combuustion of biomass and fossil fuels. "},"carbon budget":{"term":"Carbon Budget ","definition":"\"This budget doesn\u2019t measure money, but greenhouse gases. It is the set amount of CO2 we can emit before the rise in Earth\u2019s temperatures gets too dangerous.\""},"carbon cycle":{"term":"Carbon Cycle","definition":"\"The flow of carbon in various forms through the atmosphere, hydrosphere, terrestrial and marine biosphere and lithosphere.\""},"carbon dioxide":{"term":"Carbon Dioxide","definition":"\"Carbon dioxide might be a naturally occuring gas, but it has strong global warming potential. So when we do things like burn fossil fuels, this is a byproduct and we create way too much of it. \""},"carbon footprint":{"term":"Carbon Footprint","definition":"\"The amount of carbon emitted by an individual, like you, or a caopny or organization. First promoted by an oil company to shift environmental responsibility away from these companies and onto regular people. I don't think that this bold itlazied text is needed or should be included.\""},"carbon neutrality":{"term":"Carbon Neutrality","definition":"Reaching a point where we're removing the same amount of carbon from the atmosphere as we release. "},"carbon offsetting":{"term":"Carbon Offsetting","definition":"Reducing the amount of carbon we're responsible for in one area to make up for another. "},"carbon pricing":{"term":"Carbon Pricing","definition":"The way we put an economc value on both the expenditure and saving of carbon dioxide into the atmosphere. "},"climate change":{"term":"Climate Change","definition":"\"This is the big one. Climate change refers to an identifiable change in the state of the climate. This is a measurable trend over a long period of time, as in decades long. It is not the same a short-term changes in the local daily weather.\""},"climate governance":{"term":"Climate Governance ","definition":"\"Sometimes, we need a little help. Climate governance refers to the policies and measures that will keep us on track to prevent, minimise and adapt to climate change risks.\""},"climate negotiations":{"term":"Climate Negotiations","definition":"These are the conversations that happen every year when the United Nations bring together governments together from around the world to discuss action for how to stop climate change. "},"climate promise":{"term":"Climate Promise","definition":"This is the United Nation's commitment to take action against climate change. "},"climate target":{"term":"Climate target ","definition":"This is the temperature limit that we're aiming towards to avoid dangerous climate consequences. "},"co2":{"term":"CO2","definition":"This is the chemical name for carbon dioxide. "},"cop - conference of the parties":{"term":"COP - Conference of the Parties","definition":"\"A meeting of all parties of any of the many United Nation's conventions, including on climate change. \""},"decarbonization":{"term":"Decarbonization","definition":"\"The process of aiming to reach an existance where no carbon is being emitted by electricity, industrial process or transport.\""},"deforestation":{"term":"Deforestation","definition":"Cutting down forests. "},"desertification":{"term":"Desertification","definition":"\"This is when land becomes a desert because of climate change or human activity. When vegetation dies off, soil will deteriorate and dry out. \""},"developed countries":{"term":"Developed Countries","definition":"\"How developed a country is refers to how it meets a set of criteria. There are a range of ways this is decided, but the World Bank primarily uses national income as the main criteria. The UNDP also considers indicators like life expectancy and education levels. There are three tiers; industrialised, developed and developing. \""},"developing countries":{"term":"Developing Countries","definition":"\"When referring to the state of development of a country, countries that are least developed would fall into this category. \""},"disaster":{"term":"Disaster","definition":"\"When an event occurs that has a severe impact on the normal functioning of a community we class that as a disaster. You'll see a widespread effect on human, material, economic and environmental circumstances.  \""},"disaster risk management":{"term":"Disaster Risk Management","definition":"\"This is the process of having a disaster response planned, and ready to be implemented if one occurs. \""},"displacement":{"term":"Displacement","definition":"\"The forced movement of people from their home within the country they live in. Some estimate that by 2050, climate change could force as many as 140 million of us to flee our homes.\""},"drought":{"term":"Drought","definition":"A period of time with an abnormal lack of rain or precipitation. "},"dryland farming":{"term":"Dryland Farming","definition":"\"Farming in regions that are naturally dry, and using certain practices to conserve moisture where possible. \""},"early warning systems (ews)":{"term":"Early Warning Systems (EWS)","definition":"\"This refers to the systems created to warn people, communities or organisations of a hazard, allowing for them to prepare and reduce the impact. \""},"ecosystem":{"term":"Ecosystem","definition":"\"Both the collection of plants, animals and other living organisms and the physical environment where they live.  \""},"el ni\u00f1o - southern oscillation (enso)":{"term":"El Ni\u00f1o - Southern Oscillation (ENSO)","definition":"\"Describing the band of warm ocean water in the Pacific Ocean east of the dateline. This creates a fluctiuation in the surface pressure of the ocean in this area that then effects wind, sea surface temperatures and rain patterns in this area. \""},"emission pathways":{"term":"Emission Pathways","definition":"These are the various outcomes that are likely depending on what climate action is taken. "},"emissions":{"term":"Emissions","definition":"\"These are the greenhouse gases we release into the air, that are made by activities like burning fossil fuels or industrial agriculture.\""},"emissions trading":{"term":"Emissions Trading","definition":"\"By creating a trading scheme for emissions, we create a market based incentive for businesses to limit emissions. Where organisations, governments or individuals are allocated limit permits that they can use, or sell to others who over-index on their own use. \""},"energy efficiency":{"term":"Energy Efficiency","definition":"\"Basically, this refer to how good something is at creating energy. We consider the energy output, and the input needed to create it. Ideally, reducing the demand of energy creation. For example, we insulate buildings to reduce heating and cooling requirements.\""},"equality":{"term":"Equality","definition":"\"The princlipal where all humans are of equal worth, with equal opportunities, rights, and obligations, no matter your origins. \""},"equity":{"term":"Equity","definition":"The principal that fairness is created by sharing the impacts and responses to climate change in equal ways. "},"extinction":{"term":"Extinction","definition":"The complete disappearance of a whole species. "},"extreme weather event":{"term":"Extreme Weather Event","definition":"\"A weather occurence that is at either end of the expected spectrum, this can be referred to as 'climate extremes'. \""},"fairness":{"term":"Fairness","definition":"Treatment where everyone is considered of equal worth and has equal opportunity."},"food security":{"term":"Food Security","definition":"\"The ideal state where all people, at all times have physical, social and economic access to enough safe and nutritious food. \""},"food systems":{"term":"Food Systems","definition":"\"The food, and the processes and infrastructure needed to grow and deliver that food to the population. \""},"fossil fuels":{"term":"Fossil Fuels","definition":"\"It's got nothing to do with burning my fossil bones. These are sources of energy that are non-renewable, such as coal and oil. The majority of greenhouse gas emissions come from burning these for energy.\""},"gdp":{"term":"GDP","definition":"Gross domestic product refers to the total value of all goods and services created in an economy. "},"geosphere":{"term":"Geosphere","definition":"\"The ground that makes up the Earth's surface, both on land and under the sea.\""},"glaciers":{"term":"Glaciers","definition":"A mass of ice that builds up from a flow of water and melting snow that moves under its own weight. "},"global warming":{"term":"Global Warming","definition":"\"This is the proven gradual warming of the Earth's temperature, that is also expected to continue. \""},"green economy":{"term":"Green Economy","definition":"\"Refers to indistries, and the money that they make, that don't negatively impact the environment. \""},"green energy":{"term":"Green Energy","definition":"Energy generated from natural and infinite sources. "},"green recovery":{"term":"Green Recovery","definition":"A way for us to recover from the economic impacts of COVID-19 and also take action to stop climate change; investing in renewable energies to create millions of sustainable jobs."},"green transition":{"term":"Green Transition","definition":"\"An exciting opportunity! But if you're after specifics, it's about changing the way we do things to make them safter and more benefitial to the environment. Green transitions should be sought across all sectors and economies. \""},"greenhouse effect":{"term":"Greenhouse effect","definition":"When heat is trapped by gases that have built up over time in the Earth's atmosphere. One of the main ways these gases are let out into the air is from the burning of fossil fuels. "},"greenhouse gases":{"term":"Greenhouse Gases","definition":"\"The natural and man-made gases that are found in the atmosphere, that then absorb and create heat radiation. \""},"habitat":{"term":"Habitat","definition":"The specific environment where a living thing tends to live."},"heatwave":{"term":"Heatwave","definition":"\"A period of abnormally hot weather. Not-so fun fact: Heatwaves that used to occur once in 50 years, are now 4.8 times more likely.\""},"indigenous knowledge":{"term":"Indigenous Knowledge","definition":"The generartional and storied knowledge shared within first nations communities learned over long histories living alongside the environment. "},"industrial revolution":{"term":"Industrial Revolution","definition":"\"This is the period of time that marks the strong increase in the use of fossil fuels, and the catalyst for climate change. Beginning in the second half of the 18th century.\""},"industrialized countries":{"term":"Industrialized Countries","definition":"\"While there are a lot of ways industrialised countries can be categories, countires that are the most highly developed in terms of economic stability and infrastruce would generally fall into this category. \""},"inequality":{"term":"Inequality","definition":"\"This is the uneven opportunities and discrimination towards a particular group or society. Generally, this is based on gender, class, ethnicity, ability, age, and means they're progression is impacted.\""},"infrared radiation":{"term":"Infrared radiation","definition":"\"All solids, liquids and gases create heat energy, this is called infrared radiation. This is important to understand how greenhouse gases are created. The Earth's surface creates heat, which then because of the amount of carbon dioxide is in the atmosphere, is then reabsorbed by the surface, creating the greenhouse effect. \""},"ipcc":{"term":"IPCC","definition":"The Intergovernmental Panel on Climate Change is an organisation of 195 member countries. Their latest report determined that \u201cit is unequivocal\u201d that humans have caused global warming.  "},"kyoto protocol":{"term":"Kyoto Protocol","definition":"\"A commitment adopted in 1997, commiting industrialised countires to limit and reduce greenhouse gas emissions.\""},"land surface air temperature":{"term":"Land Surface Air Temperature","definition":"The temperateure read at a standard height from the ground around the world. "},"land use":{"term":"Land Use","definition":"\"It's about how we use land. But if we want to get more technical, it's about thinking about the social and economic purpose behind how land is managed, such as for building cities, farming, or timber so name a few.\""},"land use change":{"term":"Land Use Change","definition":"\"Sometimes it's pretty simple, this is when we change what land is used for from one thing to another.\""},"least developed countries (ldcs)":{"term":"Least Developed Countries (LDCs)","definition":"\"This is a list of the countries around the world that are of developmental concern, with the lowest socioeconomic measurements. \""},"methane":{"term":"Methane","definition":"\"A harmful greenhouse gas that is produced by a range of processes, such as decomposing waste or coal production. \""},"migration":{"term":"Migration","definition":"The movement of people across international borders; influenced by all types of factors."},"millenium development goals":{"term":"Millenium Development Goals","definition":"\"These are the eight goals, and their deadlines, that were developed at the UN Millenium Summit in 2000. These goals are aimed at combating poverty, hunger, illiteracy, discrimination against women and environmental degradation.\""},"mitigation":{"term":"Mitigation","definition":"Actions taken to reduce negative imacts of something on the environment. "},"nationally determined contributions (ndcs)":{"term":"Nationally Determined Contributions (NDCs)","definition":"\"Once a country has joined the Paris Agreement (a commitment to take climate action), the Nationally Deteminded Contributions refer to that countries commitments to take action and make changes. \""},"natural gas":{"term":"Natural Gas","definition":"\"Despite what the name might have you thinking, these gases \u2013 which are found in pockets underground - actually harm nature by warming our planet. \""},"nature":{"term":"Nature","definition":"\"Nature is the natural, physical and material world around us. But most of all, it's about the health of our environment, and that humans benefit of the environment, we need to take care of it.\""},"negative emissions":{"term":"Negative Emissions","definition":"This is when we're able to remove greenhouse gases from the atmosphere. "},"net zero":{"term":"Net zero","definition":"\"This describes the process where overall, there is no carbon dioxide released into the atmosphere. Generally, carbon dioxide is still being produced, but it's not more than what was removed in the process.\""},"ocean acidification":{"term":"Ocean acidification","definition":"When the pH levels of the ocean change over a long time. One of the causes has been the ocean's absorbtion of carbon dioxide from the atmosphere. "},"ozone":{"term":"Ozone","definition":"A gas found in the Earth's atmostphere."},"ozone layer":{"term":"Ozone layer","definition":"\"The specific layer of the gas, Ozone, in the atmosphere. This layer of gas absorbs the majority of the Sun's ultraviolet rays. \""},"paris agreement":{"term":"Paris Agreement","definition":"\"The agreement adopted in 2015, signed by state leaders commiting to certain climate goals in order to reduce the risks and impact of climate change.  \""},"permafrost":{"term":"Permafrost","definition":"Ground that has been at or below 0 degrees for at least two years in a row."},"arctic":{"term":"Arctic","definition":"The most Northern region on Earth."},"poverty":{"term":"Poverty","definition":"\"Poverty refers to the circumstances where people are lacking in certain factors. For example, this can mean limited resources, economic conditions, or a lack of basic security. \""},"poverty eradication":{"term":"Poverty Eradication","definition":"Working towards ending poverty in all forms everywhere. "},"pre-industrial":{"term":"Pre-industrial","definition":"The baseline of human impact on the world taken before industry changed the demands on the environment. This period is generally considered to be between 1850 - 1900."},"precipitation":{"term":"Precipitation","definition":"\"A part of the water cycle, precipitation happens when liquid of frozen water forms in the air and falls to Earth. \""},"purchasing power parity":{"term":"Purchasing Power Parity","definition":"A way of understanding currency value in relation to what basic goods and services can be bought with an amount. "},"radiation":{"term":"Radiation","definition":"The electromagnetic waves that come from different energy sources. "},"recycling":{"term":"Recycling","definition":"Reprocessing a resource so that it can be used again. "},"reforestation":{"term":"Reforestation","definition":"\"Re-planting a forest where there had previously been one before, but had since been removed. Making things right again. \""},"renewable energy":{"term":"Renewable Energy","definition":"\"Creating energy from a source that will never run out, like wind or solar power.\""},"salinization":{"term":"Salinization","definition":"This is the build up of salt in soil."},"sea level rises":{"term":"Sea level rises","definition":"The changing levels of the sea both locally and globally. This happens because of a series of factors; such as a change in mass of water in the ocean caused by melting glaciers."},"sea surface temperature (sst)":{"term":"Sea Surface Temperature (SST)","definition":"This is the water temperature taken close to the ocean's surface. "},"sequestration":{"term":"Sequestration","definition":"\"The storing of a pollutant, like carbon, under the ground. Where it is no longer a greenhouse gas in our atmosphere.\""},"small island developing states (sids)":{"term":"Small island developing states (SIDS)","definition":"\"A collection of small island nations that are facing similar and specific social, economic and environmental issues including linked to climate change.\""},"social cost of carbon":{"term":"Social Cost of Carbon","definition":"The attempt to put a monetary value on carbon emissions that considers its negative imapct. "},"soil carbon sequestration (scs)":{"term":"Soil carbon sequestration (SCS)","definition":"We can make some changes to the way we manage land that will see the soil become more healthy. This results in the removal of carbon dioxide from the atmosphere."},"stratosphere":{"term":"Stratosphere","definition":"This is the layer of the atmosphere that generally sits between 10km and 50km in the air. "},"sustainability":{"term":"Sustainability","definition":"The pursuit of ensuring the continuation of the environment and human life in a fair way. "},"sustainable development":{"term":"Sustainable development","definition":"Driving growth and development while ensuring resources are not extingushed for future generations. "},"sustainable development goals":{"term":"Sustainable Development Goals","definition":"\"The 17 global goals that are designed to help us work towards a better and more sustainable future. This includes ambitons like ending poverty, protecting water ecosystems and taking urgent action on climate change. \""},"technology transfer":{"term":"Technology transfer","definition":"People all around the world are developing ways that we can combat climate change. Technology transfer is about making sure this knowlege is shared and there is cooperation in this goal."},"tipping point":{"term":"Tipping point","definition":"The threshold for irreversible change from one climate state to another."},"transportation":{"term":"Transportation","definition":"The infrastructure of movement; responsible for 14% of global greenhouse gas emissions. "},"tropical cyclone":{"term":"Tropical cyclone","definition":"This is when a cyclone originates over a tropical ocean."},"unep":{"term":"UNEP","definition":"\"The United Nations Environment Programme; which is the leading authority that sets the global environmental agenda. "},"united nations framework convention on climate change (unfccc)":{"term":"United Nations Framework Convention on Climate Change (UNFCCC)","definition":"The Convention that forms the basis for the current climate pursuits."},"vulnerability":{"term":"Vulnerability","definition":"The different ways that humans and the environment can be susceptible to harm or an inability to adapt."},"wildlife conservation":{"term":"Wildlife Conservation","definition":"The aim to protect plants and animals as humans enroach on their homes and territories."}};
const words = ["1.5 degrees","2 degrees","adaptation","aerosol","afforestation","anthropocene","anthropogenic","atmosphere","biochar","biodiversity","bioenergy","biofuels","biomass","biosphere","black carbon aerosol","carbon budget","carbon cycle","carbon dioxide","carbon footprint","carbon neutrality","carbon offsetting","carbon pricing","climate change","climate governance","climate negotiations","climate promise","climate target","co2","cop - conference of the parties","decarbonization","deforestation","desertification","developed countries","developing countries","disaster","disaster risk management","displacement","drought","dryland farming","early warning systems (ews)","ecosystem","el niño - southern oscillation (enso)","emission pathways","emissions","emissions trading","energy efficiency","equality","equity","extinction","extreme weather event","fairness","food security","food systems","fossil fuels","gdp","geosphere","glaciers","global warming","green economy","green energy","green recovery","green transition","greenhouse effect","greenhouse gases","habitat","heatwave","indigenous knowledge","industrial revolution","industrialized countries","inequality","infrared radiation","ipcc","kyoto protocol","land surface air temperature","land use","land use change","least developed countries (ldcs)","methane","migration","millenium development goals","mitigation","nationally determined contributions (ndcs)","natural gas","nature","negative emissions","net zero","ocean acidification","ozone","ozone layer","paris agreement","permafrost","arctic","poverty","poverty eradication","pre-industrial","precipitation","purchasing power parity","radiation","recycling","reforestation","renewable energy","salinization","sea level rises","sea surface temperature (sst)","sequestration","small island developing states (sids)","social cost of carbon","soil carbon sequestration (scs)","stratosphere","sustainability","sustainable development","sustainable development goals","technology transfer","tipping point","transportation","tropical cyclone","unep","united nations framework convention on climate change (unfccc)","vulnerability","wildlife conservation"];
const spanClass = "__undp_term";
let activeSpan = undefined;

const bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', '__undp_selection_bubble');
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
  let h = (point.x - window.scrollX) > windowRect.width - (point.x - window.scrollX) ? "left" : "right";
  let v = (point.y - window.scrollY) > windowRect.height - (point.y - window.scrollY)  ? "top" : "bottom";
  return v + h;
}

function positionBubble(bubble, event)
{
  let x = event.clientX;
  let y = event.clientY;
  let bubbleRect = bubbleDOM.getBoundingClientRect();
  let bounds = getOffset(event.target);
  let nibHeight = 30;
  let nibWidth = 30;
  let offsetX = 10;
  let position = getBestPosition(bubbleRect, bounds, {x:x, y:y});
  let middlePoint = {x: bounds.x + (bounds.width/2), y: bounds.y + (bounds.height/2)};

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

  bubble.style.top = y + 'px';
  bubble.style.left = x + 'px';
  bubbleDOM.classList.remove('__undp_topleft');
  bubbleDOM.classList.remove('__undp_top');
  bubbleDOM.classList.remove('__undp_topright');
  bubbleDOM.classList.remove('__undp_bottomleft');
  bubbleDOM.classList.remove('__undp_bottom');
  bubbleDOM.classList.remove('__undp_bottomright');
  bubbleDOM.classList.add("__undp_" + position);

}


// Move the bubble to the appropriate location.
function renderBubble(event, selection) {

  if(bubbleDOM.classList.contains("active"))
  {
    bubbleDOM.classList.remove('active');
    setTimeout(() => renderBubble(event, selection), 300);
    return;
  }
  

  let term = whichTermIsIn(selection);
  let termCapped = term.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  let deffy = typeof(definitions[term.toLowerCase()]) != "undefined" ? definitions[term.toLowerCase()] : {definition: "", term: "Uh oh"};
  if(deffy.definition.length < 5 || !deffy.definition)
  {
    deffy.definition = "This definition wasn't found. Report it.";
  }
  var _html = '<div id="__undp_x"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L17 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 1L1 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  _html += `<h3 class="__undp_term_title"><span class='bracket'>[</span> ${termCapped} <span class='bracket'>]</span></h3><p id='__undp_definition'> ${deffy.definition} </p>`;
  _html += '<div class="__undp_nibble"><span></span></div>';
  bubbleDOM.innerHTML = _html;
  bubbleDOM.classList.add('active');
  positionBubble(bubbleDOM, event);
}

function isWordADefinition(selection)
{
  let low = selection.toLowerCase();
  if(words.includes(low)) return true;
  return words.some(r=> low.indexOf(r) >= 0);
}

function whichTermIsIn(selection)
{
  return words.find(term => selection.toLowerCase().indexOf(term) >= 0);
}

function closeActiveBubble() {
  window.removeEventListener('scroll', closeActiveBubble);
  window.removeEventListener('resize', closeActiveBubble);

  bubbleDOM.classList.remove('active');
  if(activeSpan != undefined) { activeSpan.classList.remove("active"); }
}


document.addEventListener('click', function (event) 
{
	if (!event.target.matches('.' + spanClass)) return;
  if(activeSpan != undefined)
  {
    activeSpan.classList.remove("active");
  }
  event.target.classList.add('active');
  activeSpan = event.target;

  window.removeEventListener('scroll', closeActiveBubble);
  window.removeEventListener('resize', closeActiveBubble);
  window.addEventListener('scroll', closeActiveBubble);
  window.addEventListener('resize', closeActiveBubble);

  renderBubble(event, event.target.innerHTML);
  renderBubble(event, event.target.innerHTML);
}, false);

document.addEventListener('mousedown', function (event) {
  if (event.target.matches('.' + spanClass) || event.target.matches('.__undp_selection_bubble')) return; 
  closeActiveBubble();
}, false);





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


function runSearch ()
{
  words.forEach(word => { doSearch(word, "rgba(1,1,1,0)"); });
  let spans = Array.from( document.querySelectorAll('body span')); 
  let arr = spans.filter( span => String( document.defaultView.getComputedStyle( span, null ).backgroundColor ) == 'rgba(1, 1, 1, 0)' );

  arr.forEach( span => {
      span.style.backgroundColor = 'transparent';
      if (span.style.removeProperty) {
        span.style.removeProperty('background-color');
      } else {
        span.style.removeAttribute('background-color');
      }
      span.classList.add(spanClass);

  });

  window.scrollTo(0, 0);
}






chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'disable')) {

    console.log("main.js content received message");

    runSearch();
  }
});