const words = ["1.5 degrees","2 degrees","adaptation","aerosol","afforestation","anthropocene","atmosphere","average temprature","biocar","biodiversity","bioenergy","biofuels","biosphere","black carbon aerosol","carbon cycle","carbon dioxide","carbon footprint","carbon neutrality","carbon offsetting","carbon pricing","climate change","climate negotiations","climate promise","co2","cop - conference of the parties","decarbonization","deforestation","desertification","developed countries","developing countries","disaster","disaster risk management","displacement","drought","dryland farming","early warning systems","earth","ecosystem","el ni\u00f1o - southern oscillation (enso)","emission pathways","emissions","emissions trading","energy efficiency","environment","equality","equity","extinction","extremen weather event","fairness","feedback loop","food security","food systems","fossil fuels","gdp","glaciers","global warming","green economy","green energy","green recovery","green transition","greenhouse effect","greenhouse gases","habitat","heatwave","indigenous knowledge","industrial revolution","industrialized countries","inequality","infrared","ipcc - intergovernmental panel on climate change","kyoto protocol","land surface air temperature","land use","land use change","least developed countries (ldcs)","methane","migration","millenium development goals","mitigation","natural gas","nature","ndc","negative emissions","net zero","ocean acidification","oceans","ozone layer","paris agreement","planet","plastics","polar","poverty","poverty eradication","pre-industrial","precipitation","purchasing power parity","radiation","recycling","reforestation","renewable energy","renewable energy","resilience","salinity","sea level rises","sea surface temperature","sequestration","small island developing states (sids)","social cost of carbon","soil carbon sequestration (scs)","stratosphere","stratosphere","sustainability","sustainable development goals","technology transfer","tipping point","transportation","tropical cyclone","unep","unfccc","united nations framework convention on climate change (unfccc)","vulnerability","well being","wildlife conservation"];
const spanClass = "__undp_term";

const definitions = {"1.5 degrees":{"term":"1.5 Degrees","definition":"\"The preservation of the global average temperature below 1.5 degrees Celsius, compared to pre-industrial levels, can diminuish the impacts of climate change, according to scientists. The earth has already warmed about 1 degree.\""},"2 degrees":{"term":"2 Degrees","definition":"\"The 2 Degree goal has been the initialy foreseen temperature (for the Paris Climate Agreement). However, research approoved 1.5 Degrees as a much safer limit.\""},"adaptation":{"term":"Adaptation","definition":"Adjustment or preparation of natural or human systems to a new or changing environment which moderates harm or exploits beneficial opportunities."},"aerosol":{"term":"Aerosol","definition":"Small particles or liquid droplets in the atmosphere that can absorb or reflect sunlight depending on their composition."},"afforestation":{"term":"Afforestation","definition":"The Plantation of new forests on lands that historically have not contained forests."},"anthropocene":{"term":"Anthropocene","definition":"\"The \u2018Anthropocene\u2019 is a proposed new geological epoch resulting from significant human-driven changes to the structure and functioning of the Earth System, including the climate system.  The by geological scientist propoesed terminology of the epoch of the anthropocene has stratigraphic evidence that human activities have changed the Earth System to the extent of forming geological deposits with a signature that is distinct from those of the Holocene, and which will remain in the geological record.\""},"atmosphere":{"term":"Atmosphere","definition":"\"The gaseous envelope surrounding the earth, divided into five layers \u2013 the troposphere which contains half of the Earth\u2019s atmosphere, the stratosphere, the mesosphere, the thermosphere, and the exosphere, which is the outer limit of the atmosphere.\""},"average temperature":{"term":"Average Temperature","definition":"\"The average temperature of the world is calculated with the help of temperature readings taken from weather stations, satellites and ships and buoys at sea. Currently it stands at 14.9C.\""},"biocar":{"term":"Biocar","definition":""},"biodiversity":{"term":"Biodiversity","definition":"the diversity of a region based on the number and kinds of different plant and animal organisms."},"bioenergy":{"term":"Bioenergy","definition":"Energy derived from any form of biomass or its metabolic by-products."},"biofuels":{"term":"Biofuels","definition":"\"A fuel in liquid form derivated from biomass. Biofuels can include  bioethanol from sugarcane or maize, biodiesel from canola or soybeans, and black liquor from the paper-manufacturing process\""},"biomass":{"term":"Biomass","definition":"\"Living or recently dead organic material. Biomass is plant or animal material used to produce energy or as raw materials for other products. The simplest example is cow dung; another is compressed wood pellets, which are now used in some power stations.\""},"biosphere":{"term":"Biosphere","definition":"\"The part of the Earth system comprising all ecosystems and living organisms, in the atmosphere, on land (terrestrial biosphere) or in the oceans (marine biosphere), including derived dead organic matter, such as litter, soil organic matter and oceanic detritus\""},"black carbon aerosol":{"term":"Black Carbon Aerosol","definition":"\"Black carbon (BC) is the most strongly light-absorbing component of particulate matter (PM), and is formed by the incomplete combustion of fossil fuels, biofuels, and biomass. It is emitted directly into the atmosphere in the form of fine particles.\""},"carbon budget":{"term":"Carbon Budget ","definition":"\"This term refers to three concepts in the literature: (1) an assessment of carbon cycle sources and sinks on a global level, through the synthesis of evidence for fossil fuel and cement emissions,"},"ai land-use change emissions":{"term":"AI land-use change emissions","definition":" ocean and land CO2 sinks, and the resulting atmospheric CO2 growth rate. This is referred to as the global carbon budget; (2) the estimated cumulative amount of global carbon dioxide emissions that that is estimated to limit global surface temperature to a given level above a reference period, taking into account global surface temperature contributions of other GHGs and climate forcers; (3) the distribution of the carbon budget defined under (2) to the regional, national, or sub-national level based on considerations of equity, costs or efficiency. See also Remaining carbon budget.\""},"carbon cycle":{"term":"Carbon Cycle","definition":"\"The term used to describe the flow of carbon (in various forms, e.g., as carbon dioxide (CO2), carbon in biomass, and carbon dissolved in the ocean as carbonate and bicarbonate) through the atmosphere, hydrosphere, terrestrial and marine biosphere and lithosphere.\""},"carbon dioxide":{"term":"Carbon Dioxide","definition":"\"A naturally occurring gas, CO2 is also a by-product of burning fossil fuels (such as oil, gas and coal), of burning biomass, of land-use changes (LUC) and of industrial processes (e.g., cement production). It is the principal anthropogenic greenhouse gas (GHG) that affects the Earth\u2019s radiative balance. It is the reference gas against which other GHGs are measured and therefore has a global warming potential (GWP) of 1\""},"carbon footprint":{"term":"Carbon Footprint","definition":"\"The amount of carbon emitted by an individual or organisation in a given period of time, or the amount of carbon emitted during the manufacture of a product.\""},"carbon neutrality":{"term":"Carbon Neutrality","definition":"\"A process where there is no net release of carbon dioxide (CO2). The process would be carbon neutral if the amount taken out and the amount released were identical. A company or country can also achieve carbon neutrality by means of carbon offsetting. The phrase \"\"net zero\"\" has the same meaning.\""},"carbon offsetting":{"term":"Carbon Offsetting","definition":"\"Carbon offsetting is most commonly used in relation to air travel. It allows passengers to pay extra to help compensate for the carbon emissions produced from their flight. The money is then invested in environmental projects - like planting trees or installing solar panels - which reduce the carbon dioxide in the air by the same amount. Some activists have criticised carbon offsetting as an excuse to continue polluting, arguing that it does little to change behaviour.\""},"carbon pricing":{"term":"Carbon Pricing","definition":"\"The price for avoided or released carbon dioxide (CO2) or CO2-equivalent emissions. This may refer to the rate of a carbon tax, or the price of emission permits. In many models that are used to assess the economic costs of mitigation, carbon prices are used as a proxy to represent the level of effort in mitigation policies.\""},"climate change":{"term":"Climate Change","definition":"\"A pattern of change affecting global or regional climate, as measured by average temperature and rainfall, and how often extreme weather events like heatwaves or heavy rains happen. This variation may be caused by both natural processes and by humans. Global warming is an informal term used to describe climate change caused by humans.\""},"climate governance":{"term":"Climate Governance ","definition":"\"Purposeful mechanisms and measures aimed at steering social systems towards preventing, mitigating, or adapting to the risks posed by climate changeA comprehensive and inclusive concept of the full range of means for deciding, managing, implementing and monitoring policies and measures.\""},"climate negotiations":{"term":"Climate Negotiations","definition":"Climate negotiations take place every year as the United Nations brings governments together to discuss action to stop climate change. The goal is usually a collective agreement to reduce carbon emissions by certain dates. The latest of these is the Paris Agreement of 2015 which set the targets of limiting warming to 2C or 1.5C if possible. Negotiations are always difficult because many countries are heavily dependent on fossil fuels and worry about the effects of any change on their economies."},"climate target":{"term":"Climate target ","definition":"\"Climate target refers to a temperature limit, AI concentration level, or emissions reduction goal used towards the aim of avoiding dangerous anthropogenic interference with the climate system.\""},"climate promise":{"term":"Climate Promise","definition":""},"co2":{"term":"CO2","definition":"\"Means carbon dioxide, a naturally occurring gas which is also a major product of human activity such as burning fossil fuels. Increasing levels of carbon dioxide in the atmosphere means more heat is retained, causing the planet to warm up.\""},"cop - conference of the parties":{"term":"COP - Conference of the Parties","definition":"\"Stands for \"\"Conference of the Parties\"\". It is the name for the annual UN negotiations on climate change under what is called the United Nations Framework Convention on Climate Change (see UNFCCC). The aim is to prevent dangerous human interference with the climate.\""},"decarbonization":{"term":"Decarbonization","definition":"\"The process by which countries, individuals or other entities aim to achieve zero fossil carbon existence. Typically refers to a reduction of the carbon emissions associated with electricity, industry and transport\""},"deforestation":{"term":"Deforestation","definition":"Conversion of forest to non-forest."},"desertification":{"term":"Desertification","definition":"\"Land degradation in arid, semi-arid, and dry sub-humid areas resulting from various factors, including climatic variations and human activities. Further, the UNCCD (The United Nations Convention to Combat Desertification) defines land degradation as a reduction or loss, in arid, semi-arid, and dry sub-humid areas, of the biological or economic productivity and complexity of rain-fed cropland, irrigated cropland, or range, pasture, forest, and woodlands resulting from land uses or from a process or combination of processes, including processes arising from human activities and habitation patterns, such as: (i) soil erosion caused by wind and\/or water; (ii) deterioration of the physical, chemical and biological or economic properties of soil; and (iii) long-term loss of natural vegetation. Conversion of forest to non-forest.\""},"developed countries":{"term":"Developed Countries","definition":"see industrialised countries"},"developing countries":{"term":"Developing Countries","definition":"see industrialised countries"},"disaster":{"term":"Disaster","definition":"\"Severe alterations in the normal functioning of a community or a society due to hazardous physical events interacting with vulnerable social conditions, leading to widespread adverse human, material, economic or environmental effects that require immediate emergency response to satisfy critical human needs and that may require external support for recovery.\""},"disaster risk management":{"term":"Disaster Risk Management","definition":"\"Processes for designing, implementing, and evaluating strategies, policies, and measures to improve the understanding of disaster risk, foster disaster risk reduction and transfer, and promote continuous improvement in disaster preparedness, response, and recovery practices, with the explicit purpose of increasing human security, well-being, quality of life, and sustainable development.\""},"displacement":{"term":"Displacement","definition":"\"Internal displacement refers to the forced movement of people within the country they live in. Internally displaced persons (IDPs) are \u2018Persons or groups of persons who have been forced or obliged to flee or to leave their homes or places of habitual residence, in particular as a result of or in order to avoid the effects of armed conflict, situations of generalized violence, violations of human rights or natural or human-made disasters, and who have not crossed an internationally recognized State border.\u2019 (UN, 1998).\""},"drought":{"term":"Drought","definition":"\"A period of abnormally dry weather long enough to cause a serious hydrological imbalance. Drought is a relative term, therefore any discussion in terms of precipitation deficit must refer to the particular precipitation-related activity that is under discussion. For example, shortage of precipitation during the growing season impinges on crop production or ecosystem function in general (due to soil moisture drought, also termed agricultural drought), and during the runoff and percolation season primarily affects water supplies (hydrological drought). Storage changes in soil moisture and groundwater are also affected by increases in actual evapotranspiration in addition to reductions in precipitation. A period with an abnormal precipitation deficit is defined as a meteorological drought.\""},"dryland farming":{"term":"Dryland Farming","definition":""},"early warning systems":{"term":"Early Warning Systems","definition":"\"The set of technical, financial and institutional capacities needed to generate and disseminate timely and meaningful warning information to enable individuals, communities and organizations threatened by a hazard to prepare to act promptly and appropriately to reduce the possibility of harm or loss. Dependent upon context, EWS may draw upon scientific and\/or Indigenous knowledge. EWS are also considered for ecological applications e.g., conservation, where the organization itself is not threatened by hazard but the ecosystem under conservation is (an example is coral bleaching alerts), in agriculture (for example, warnings of ground frost, hailstorms) and in fisheries (storm and tsunami warnings).\""},"earth":{"term":"Earth","definition":""},"ecosystem":{"term":"EcoSystem","definition":"\"An ecosystem is a functional unit consisting of living organisms, their non-living environment and the interactions within and between them. The components included in a given ecosystem and its spatial boundaries depend on the purpose for which the ecosystem is defined: in some cases they are relatively sharp, while in others they are diffuse. Ecosystem boundaries can change over time. Ecosystems are nested within other ecosystems and their scale can range from very"},"ai small to the entire biosphere. in the current era":{"term":"AI small to the entire biosphere. In the current era","definition":" most ecosystems either contain people as key organisms, or are influenced by the effects of human activities in their environment.                                    Any natural unit or entity including living and non-living parts that interact to produce a stable system through cyclic exchange of materials\""},"el ni\u00f1o - southern oscillation (enso)":{"term":"El Ni\u00f1o - Southern Oscillation (ENSO)","definition":"\"The term El Ni\u00f1o was"},"initially used to describe a warm-water current that periodically flows along the coast of ecuador and peru":{"term":"initially used to describe a warm-water current that periodically flows along the coast of Ecuador and Peru","definition":" disrupting the local fishery. It has since become identified with warming of the tropical Pacific Ocean east of the dateline. This oceanic event is associated with a fluctuation of a global-scale tropical and subtropical surface pressure pattern called the Southern Oscillation. This coupled atmosphere\u2013ocean phenomenon, with preferred time scales of two to about seven years, is known as the El Ni\u00f1o-Southern Oscillation (ENSO). It is often measured by the surface pressure anomaly difference between Tahiti and Darwin and\/or the sea surface temperatures in the central and eastern equatorial Pacific. During an ENSO event, the prevailing trade winds weaken, reducing upwelling and altering ocean currents such that the sea surface temperatures warm, further weakening the trade winds. This phenomenon has a great impact on the wind, sea surface temperature and precipitation patterns in the tropical Pacific. It has climatic effects throughout the Pacific region and in many other parts of the world, through global teleconnections. The cold phase of ENSO is called La Ni\u00f1a.\""},"emission pathways":{"term":"Emission Pathways","definition":""},"emissions":{"term":"Emissions","definition":"\"Emissions refer to greenhouse gases released into the air that are produced by numerous activities, including burning fossil fuels, industrial agriculture, and melting permafrost, to name a few. These gases cause heat to be trapped in the atmosphere, slowly increasing the Earth\u2019s temperature over time.\""},"emissions trading":{"term":"Emissions Trading","definition":"\"A market-based instrument aiming at meeting a mitigation objective in an efficient way. A cap on GHG emissions is divided in tradeable emission permits that are allocated by a combination of auctioning and handing out free allowances to entities within the jurisdiction of the trading scheme. Entities need to surrender emission permits equal to the amount of their emissions (e.g., tonnes of CO2). An entity may sell excess permits to entities that can avoid the same amount of emissions in a cheaper way. Trading schemes may occur at the intra-company, domestic, or international level (e.g., the flexibility mechanisms under the Kyoto Protocol and the EU-ETS) and may apply to carbon dioxide (CO2), other greenhouse gases (GHGs), or other substances.\""},"energy efficiency":{"term":"Energy Efficiency","definition":"\"The ratio of output or useful energy or energy services or other useful physical outputs obtained from a system, conversion process, transmission or storage activity to the input of energy (measured as kWh kWh-1, tonnes kWh-1 or any other physical measure of useful output like tonne-km transported). Energy efficiency is often described by energy intensity. In economics, energy intensity describes the ratio of economic output to energy input. Most commonly energy efficiency is measured as input energy over a physical or economic unit, i.e., kWh USD-1 (energy intensity), kWh tonne-1. For buildings, it is often measured as kWh m-2, and for vehicles as km liter-1 or liter km-1. Very often in policy \u2018energy efficiency\u2019 is intended as the measures to reduce energy demand through technological options such as insulating buildings, more efficient appliances, efficient lighting, efficient vehicles, etc.\""},"environment":{"term":"Environment","definition":""},"equality":{"term":"Equality","definition":"\"A principle that ascribes equal worth to all human beings, including equal opportunities, rights, and obligations, irrespective of origins.\""},"equity":{"term":"Equity","definition":"\"Equity is the principle of fairness in burden sharing and is a basis for understanding how the impacts and responses to climate change, including costs and benefits, are distributed in and by society in more or less equal ways. It is often aligned with ideas of equality, fairness and justice and applied with respect to equity in the responsibility for, and distribution of, climate impacts and policies across society, generations, and gender, and in the sense of who participates and controls the processes of decision-making.\""},"extinction":{"term":"Extinction","definition":""},"extremen weather event":{"term":"Extremen Weather Event","definition":"\"The occurrence of a value of a weather or climate variable above (or below) a threshold value near the upper (or lower) ends of the range of observed values of the variable. For simplicity, both extreme weather events and extreme climate events are referred to collectively as \u2018climate extremes\u2019.\""},"fairness":{"term":"Fairness","definition":"Impartial and just treatment without favouritism or discrimination in which each person is considered of equal worth with equal opportunity."},"feedback loop":{"term":"Feedback Loop","definition":"\"In a feedback loop, rising temperatures change the environment in ways that affect the rate of warming. Feedback loops can add to the rate of warming or reduce it. As the Arctic sea-ice melts, the surface changes from being a bright reflective white to a darker blue or green, which allows more of the Sun\u2019s rays to be absorbed. So less ice means more warming and more melting.\""},"food security":{"term":"Food Security","definition":"\"A situation that exists when all people, at all times, have physical, social and economic access to sufficient, safe and nutritious food that meets their dietary needs and food preferences for an active and healthy life\""},"food systems":{"term":"Food Systems","definition":""},"fossil fuels":{"term":"Fossil Fuels","definition":"\"Fossil fuels are sources of non-renewable energy, formed from the remains of living organisms that were buried millions of years ago. Burning fossil fuels like coal and oil to produce energy is where the majority of greenhouse gases originate. As the world has developed and demand for energy has grown, we\u2019ve burned more fossil fuels, causing more greenhouse gases to be trapped in the atmosphere and air temperatures to rise.\""},"geosphere":{"term":"Geosphere","definition":"\"The soils, sediments, and rock layers of the Earth's crust, both continental and beneath the ocean floors.\""},"gdp":{"term":"GDP","definition":""},"glaciers":{"term":"Glaciers","definition":"\"A perennial mass of ice, and possibly firn and snow, originating on the land surface by the recrystallisation of snow and showing evidence of past or present flow. A glacier typically gains mass by accumulation of snow, and loses mass by melting and ice discharge into the sea or a lake if the glacier terminates in a body of water.\""},"global warming":{"term":"Global Warming","definition":"\"The steady rise in global average temperature in recent decades, which experts say is mostly caused by human-produced greenhouse gas emissions. The long-term trend continues upwards with 2015, 2016, 2017 and 2018 being the warmest years on record.\""},"green economy":{"term":"Green Economy","definition":""},"green energy":{"term":"Green Energy","definition":"\"Green energy, sometimes called renewable energy, is generated from natural, replenishable sources. Examples are wind and solar power as well as biomass, made from compressed wood pellets.\""},"green recovery":{"term":"Green Recovery","definition":""},"green transition":{"term":"Green Transition","definition":""},"greenhouse effect":{"term":"greenhouse effect","definition":"\"Trapping and build-up of heat in the atmosphere (troposphere) near the Earths surface. Some of the heat flowing back toward space from the Earth's surface is absorbed by water vapor, carbon dioxide, ozone, and several other gases in the atmosphere and then reradiated back toward the Earths surface. If the atmospheric concentrations of these greenhouse gases rise, the average temperature of the lower atmosphere will gradually increase.\""},"greenhouse gases":{"term":"Greenhouse Gases","definition":"\"Natural and human-produced gases that trap heat in the atmosphere and warm the surface. The Kyoto Protocol restricts emissions of six greenhouse gases: carbon dioxide, nitrous oxide, methane, perfluorocarbons, hydrofluorocarbons, and sulphur hexafluoride.\""},"habitat":{"term":"Habitat","definition":""},"heatwave":{"term":"Heatwave","definition":"A period of abnormally hot weather. Heatwaves and warm spells have various and in some cases overlapping definitions."},"indigenous knowledge":{"term":"Indigenous Knowledge","definition":"\"Idigenous knowledge refers to the AI understandings, skills and philosophies developed by societies with long histories of interaction with their natural surroundings. For many Indigenous peoples, knowledge informs decision-making about fundamental aspects of life, from day-to-day activities to longer term actions. This knowledge is integral to cultural complexes, which also encompass language, systems of classification, resource use practices, social interactions, values, ritual and spirituality. These distinctive ways of knowing are important facets of the world\u2019s cultural diversity. Indigenous\""},"industrial revolution":{"term":"Industrial Revolution","definition":"\"A  period of rapid industrial growth with far- reaching social and economic consequences, beginning in Britain during the second half of the 18th century and spreading to Europe and later to other countries, including the United States. The invention of the steam engine was an important trigger of this development. The industrial revolution marks the beginning of a strong increase in the use of fossil fuels, initially coal, and hence emission of carbon dioxide (CO2).\""},"industrialized countries":{"term":"Industrialized Countries","definition":"\"There are a diversity of approaches for categorizing countries on the basis of their level of development, and for defining terms such as industrialized, developed, or developing. Several categorizations are used in this report. (1) In the United Nations system, there is no established convention for designation of developed and developing countries or areas. (2) The United Nations Statistics Division specifies developed and developing regions based on common practice. In addition, specific countries are designated as Least Developed Countries (LDC), landlocked developing countries, small island developing states, and transition economies. Many countries appear in more than one of these categories. (3) The World Bank uses income as the main criterion for classifying countries as low, lower middle, upper middle and high income. (4) The UNDP aggregates indicators for life expectancy, educational attainment, and income into a single composite Human Development Index (HDI) to classify countries as low, medium, high or very high human development.\""},"inequality":{"term":"Inequality","definition":"\"Uneven opportunities and social positions, and processes of discrimination within a group or society, based on gender, class, ethnicity, age, and (dis) ability, often produced by uneven development. Income inequality refers to gaps between highest and lowest income earners within a country and between countries.\""},"infrared":{"term":"infrared","definition":""},"infrared radiation":{"term":"Infrared radiation","definition":"\"Infrared radiation consists of light whose wavelength is longer than the red color in the visible part of the spectrum, but shorter than microwave radiation. Infrared radiation can be perceived as heat. The Earths surface, the atmosphere, and clouds all emit infrared radiation, which is also known as terrestrial or long-wave radiation. In contrast, solar radiation is mainly short-wave radiation because of the temperature of the Sun.\""},"ipcc - intergovernmental panel on climate change":{"term":"IPCC - Intergovernmental Panel on climate Change","definition":"The Intergovernmental Panel on Climate Change is a scientific body established by the United Nations and the World Meteorological Organization. Its role is to examine and assess the latest scientific research into climate change. Its report in 2018 warned that the rise in global temperatures should be limited to 1.5C to avoid dangerous impacts."},"kyoto protocol":{"term":"Kyoto Protocol","definition":"\"A set of rules agreed at Kyoto in Japan in 1997, in which 84 developed countries agreed to reduce their combined emissions by 5.2% of their level in 1990.\""},"land surface air temperature":{"term":"Land Surface Air Temperature","definition":"\"The near-surface air temperature over land, typically measured at 1.25\u20132 m above the ground using standard meteorological equipment.\""},"land use":{"term":"Land Use","definition":"\"Land use refers to the total of arrangements, activities and inputs undertaken in a certain land cover type (a set of human actions). The term land use is also used in the sense of the social and economic purposes for which land is managed (e.g., grazing, timber extraction, conservation and city dwelling). In national greenhouse gas inventories, land use is classified according to the IPCC land use categories of forest land, cropland, grassland, wetland, settlements, other.\""},"land use change":{"term":"Land Use Change","definition":"Land-use change involves a change from one land use category to another."},"least developed countries (ldcs)":{"term":"Least Developed Countries (LDCs)","definition":"\"A country with low indicators of socioeconomic development and human resources, as well as economic vulnerability, as determined by the United Nations.\""},"methane":{"term":"Methane","definition":"\"Methane is a gas which traps about 30 times more heat than carbon dioxide. It is produced by human activity from agriculture \u2013 cows emit large amounts \u2013 as well as waste dumps and leaks from coal mining. Methane is also emitted naturally from wetlands, termites and wildfires. One big concern is that carbon held in frozen ground in arctic regions will be released as methane as temperatures rise and the ground thaws. This could cause extra, unpredictable global warming.\""},"migration":{"term":"Migration","definition":"\"The International Organization for Migration (IOM) defines migration as \u2018The movement of a person or a group of persons, either across an international border, or within a State. It is a population movement, encompassing any kind of movement of people, whatever its length, composition and causes; it includes migration of refugees, displaced persons, economic migrants, and persons moving for other purposes, including family reunification\""},"millenium development goals":{"term":"Millenium Development Goals","definition":"\"A set of eight time-bound and measurable goals for combating poverty, hunger, disease,illiteracy, discrimination against women and environmental degradation. These goals were agreed at the UN Millennium Summit in 2000 together with an action plan to reach the goals by 2015.\""},"mitigation":{"term":"Mitigation","definition":"\"Action that will reduce human-driven climate change. This includes reducing greenhouse gas emissions by switching to renewable power, or capturing greenhouse gases from the atmosphere by planting forests.\""},"nationally determined contributions (ndcs)":{"term":"Nationally Determined Contributions (NDCs)","definition":"\"A term used under the United Nations Framework Convention on Climate Change (UNFCCC) whereby a country that has joined the Paris Agreement outlines its plans for reducing its emissions. Some countries\u2019 NDCs also address how they will adapt to climate change impacts, and what support they need from, or will provide to, other countries to adopt low-carbon pathways and to build climate resilience. According to Article 4 paragraph 2 of the Paris Agreement, each Party shall prepare, communicate and maintain successive NDCs that it intends to achieve. In the lead up to 21st Conference of the Parties in Paris in 2015, countries submitted Intended Nationally Determined Contributions (INDCs). As countries join the Paris Agreement, unless they decide otherwise, this INDC becomes their first Nationally Determined Contribution (NDC). \""},"natural gas":{"term":"Natural Gas","definition":"Underground deposits of gases consisting of 50 to 90 percent methane (CH4) and small amounts of heavier gaseous hydrocarbon compounds such as propane (C3H8) and butane (C4H10)."},"nature":{"term":"Nature","definition":""},"negative emissions":{"term":"Negative Emissions","definition":"\"Removal of greenhouse gases (GHGs) from the atmosphere by deliberate human activities, i.e., in addition to the removal that would occur via natural carbon cycle processes.\""},"net zero":{"term":"Net zero","definition":"\"A term used to describe any process where there is no net release of carbon dioxide (CO2). For example, growing biomass takes CO2 out of the atmosphere, while burning it releases the gas again. The process would be net zero if the amount taken out and the amount released were identical. A company or country can also achieve net zero by means of carbon offsetting. Net zero processes or manufactured items are sometimes also described as being \"\"carbon neutral\"\".\""},"ocean acidification":{"term":"Ocean acidification","definition":"\"The ocean absorbs approximately a quarter of human produced carbon dioxide (CO2) from the atmosphere, which helps to reduce the effect of climate change. However, when the CO2 dissolves in seawater, carbonic acid is formed. Carbon emissions from industry in the last 200 years have already begun to alter the chemistry of the world\u2019s oceans. If this trend continues, marine creatures will find it harder to build their shells and skeletal structures, and coral reefs will be killed off. This would have serious consequences for people who rely on them as fishing grounds.\""},"oceans":{"term":"Oceans","definition":""},"ozone":{"term":"Ozone","definition":"\"Ozone, the triatomic form of oxygen (O3), is a gaseous atmospheric constituent. In the troposphere, it is created both naturally and by photochemical reactions involving gases resulting from human activities (smog). Tropospheric ozone acts as a greenhouse gas. In the stratosphere, it is created by the interaction between solar ultraviolet radiation and molecular oxygen (O2). Stratospheric ozone plays a dominant role in the stratospheric radiative balance. Its concentration is highest in the ozone layer.\""},"ozone layer":{"term":"Ozone layer","definition":"\"The ozone layer is part of Earth's high atmosphere which contains a large concentration of gas molecules comprising three oxygen atoms called ozone. Ozone helps filter out harmful ultraviolet light from the Sun, which can increase the risk of skin cancer. In the 1980s and 1990s, industrial gases called chlorofluorocarbons (or CFCs) were banned because they damaged the ozone layer. These gases are also potent greenhouse gases, contributing to global warming.\""},"paris agreement":{"term":"Paris Agreement","definition":"\"The Paris Agreement under the United Nations Framework Convention on Climate Change (UNFCCC) was adopted on December 2015 in Paris, France, at the 21st session of the Conference"},"of the parties (cop) to the unfccc. the agreement":{"term":"of the Parties (COP) to the UNFCCC. The agreement","definition":" adopted by 196 AI Parties to the UNFCCC, entered into force on 4 November 2016 and as"},"of may 2018 had 195 signatories and was ratified by 177 parties. one of the goals of the paris agreement is \u2018holding the increase in the global average temperature to well below 2\u00b0c above pre-industrial levels and pursuing efforts to limit the temperature increase to 1.5\u00b0c above pre-industrial levels\u2019":{"term":"of May 2018 had 195 Signatories and was ratified by 177 Parties. One of the goals of the Paris Agreement is \u2018Holding the increase in the global average temperature to well below 2\u00b0C above pre-industrial levels and pursuing efforts to limit the temperature increase to 1.5\u00b0C above pre-industrial levels\u2019","definition":" recognising that this would significantly reduce the risks and impacts of climate change. Additionally, the Agreement aims to strengthen the ability of countries to deal with the impacts of climate change. The Paris Agreement is intended to become fully effective in 2020.\""},"permafrost":{"term":"Permafrost","definition":"Ground (soil or rock and included ice and organic material) that remains at or below 0\u00b0C for at least two consecutive years."},"planet":{"term":"Planet","definition":""},"plastics":{"term":"Plastics","definition":""},"polar":{"term":"polar","definition":"refers to the regions of Earth near the poles."},"poverty":{"term":"Poverty","definition":"\"Poverty is a complex concept with several definitions stemming from different schools of thought. It can refer to material circumstances (such as need, pattern of deprivation or limited resources), economic conditions (such as standard of living, inequality or economic position) and\/or social relationships (such as social class, dependency, exclusion, lack of basic security or lack of entitlement).\""},"poverty eradication":{"term":"Poverty Eradication","definition":"A set of measures to end poverty in all its forms everywhere."},"pre-industrial":{"term":"Pre-industrial","definition":"\"Scientists use a baseline with which to compare the modern rise in temperatures on Earth. The baseline often quoted is 1850-1900, and global temperatures have risen by about 1C since then. The reality, of course, is that industry actually got going much earlier, but there is nonetheless a perceptible uptick in the levels of CO2 and other greenhouse gases in the atmosphere by 1850-1900 and the period is deemed therefore to be a useful marker.\""},"precipitation":{"term":"precipitation","definition":"\"any and all forms of water, liquid or solid, that falls from clouds and reaches the ground. This includes drizzle, freezing drizzle, freezing rain, hail, ice crystals, ice pellets, rain, snow, snow pellets, and snow grains. The amount of fall is usually expressed in inches of liquid water depth of the substance that has fallen at a given point over a specified time period.\""},"purchasing power parity":{"term":"Purchasing Power Parity","definition":"\"The purchasing power of a currency is expressed using a basket of goods and services that can be bought with a given amount in the home country. International comparison of, for example, gross domestic products (GDPs) of countries can be based on the purchasing power of currencies rather than on current exchange rates. PPP estimates tend to lower the gap between the per capita GDP in industrialized and developing countries. \""},"radiation":{"term":"Radiation","definition":"Energy transfer in the form of electromagnetic waves or particles that release energy when absorbed by an object."},"recycling":{"term":"Recycling","definition":"\"Collecting and reprocessing a resource so it can be used again. An example is collecting aluminum cans, melting them down, and using the aluminum to make new cans or other aluminum products.\""},"reforestation":{"term":"Reforestation","definition":"Planting of forests on lands that have previously contained forests but that have been converted to some other use."},"renewable energy":{"term":"Renewable Energy","definition":"\"Renewable energy is energy that comes from naturally replenished resources, such as sunlight, wind, waves, and geothermal heat. By the end of 2014, renewables were estimated to make up almost 28% of the world\u2019s power generating capacity, enough to supply almost 23% of global electricity. Because renewables don\u2019t produce the greenhouse gases driving climate change, shifting away from fossil fuels to renewables to power our lives will put us on the path to a safe, sustainable planet for future generations.    Normally refers to energy sources such as biomass (such as wood and biogas), the flow of water, geothermal (heat from within the earth), wind, and solar."},"resilience":{"term":"Resilience","definition":"\"The capacity of social, economic and environmental systems to cope with a hazardous event or trend or disturbance, responding or reorganizing in ways that maintain their essential function,identity and structure while also maintaining the capacity for adaptation, learning and transformation.\""},"salinity":{"term":"salinity","definition":"\"referring to the amount of dissolved minerals in water, usually salt specifically.\""},"sea level rises":{"term":"Sea level rises","definition":"\"Rising sea levels are predicted to be one of the most drastic impacts of climate change. In this context, there are two main causes for sea-level rise: (1) the expansion of seawater as the oceans warm; and (2) the run-off into the ocean of water from melting ice sheet and glaciers. Current sea levels are about 20cm higher on average than they were in 1900. Year on year, sea levels are presently going up by just over 3mm.\""},"sea surface temperature (sst)":{"term":"Sea Surface Temperature (SST)","definition":"\"The sea surface temperature is the subsurface bulk temperature in the top few meters of the ocean, measured by ships, buoys, and drifters. From ships, measurements of water samples in buckets were mostly switched in the 1940s to samples from engine intake water. Satellite measurements of skin temperature (uppermost layer; a fraction of a millimeter thick) in the infrared or the top centimeter or so in the microwave are also used, but must be adjusted to be compatible with the bulk temperature.\""},"sequestration":{"term":"Sequestration","definition":"The addition of a substance of concern to a reservoir."},"small island developing states (sids)":{"term":"Small island developing states (SIDS)","definition":"\"Small island developing states (SIDS), as recognised by the United Nations OHRLLS (Office of the High Representative for the Least Developed Countries, Landlocked Developing Countries and Small Island Developing States), are a distinct group of developing countries facing specific social, economic and environmental vulnerabilities (UN-OHRLLS, 2011). They were recognized as a special case both for their environment and development at the Rio Earth Summit in Brazil in 1992. Fifty-eight countries and territories are presently classified as SIDS by the UN OHRLLS, with 38 being UN member states and 20 being Non-UN Members or Associate Members of the Regional Commissions (UN-OHRLLS, 2018).\""},"social cost of carbon":{"term":"Social Cost of Carbon","definition":"\"The net present value of aggregate climate damages (with overall harmful damages expressed as a number with positive sign) from one more tonne of carbon in the form of carbon dioxide (CO2), conditional on a global emissions trajectory over time.\""},"soil carbon sequestration (scs)":{"term":"Soil carbon sequestration (SCS)","definition":"\"Land management changes which increase the soil organic carbon content, resulting in a net removal of CO2 from the atmosphere.\""},"stratosphere":{"term":"Stratosphere","definition":"The highly stratified region of the atmosphere above the troposphere extending from about 10 km (ranging from 9 km at high latitudes to 16 km in the tropics on average) to about 50 km altitude."},"sustainability":{"term":"Sustainability","definition":"\"Sustainability means consuming the planet's resources at a rate at which they can be replenished. It's sometimes known as \"\"sustainable development\"\". Types of renewable energy such as solar or wind power are described as sustainable, while using wood from managed forests where trees are replanted according to how many are cut down is another example.\""},"sustainable development goals":{"term":"Sustainable Development Goals","definition":"\"The 17 global goals for development for all countries established by the United Nations through a participatory process and elaborated in the 2030 Agenda for Sustainable Development, including ending poverty and hunger; ensuring health and well-being, education, gender equality, clean water and energy, and decent work; building and ensuring resilient and sustainable infrastructure, cities and consumption; reducing inequalities; protecting land and water ecosystems; promoting peace, justice and partnerships; and taking urgent action on climate change.\""},"technology transfer":{"term":"Technology transfer","definition":"\"The exchange of knowledge, hardware and associated software, money and goods among stakeholders, which leads to the spread of technology for adaptation or mitigation. The term encompasses both diffusion of technologies and technological cooperation across and within countries.\""},"tipping point":{"term":"Tipping point","definition":"\"Describes how the climate may suddenly change after passing a \"\"tipping point\"\", making it even harder to stop or reverse. Scientists say it is urgent that policy-makers halve global carbon dioxide emissions by 2030 or risk triggering changes that could be irreversible.\""},"transportation":{"term":"Transportation","definition":"https:\/\/www.mission1point5learn.org\/transport"},"tropical cyclone":{"term":"Tropical cyclone","definition":"\"The general term for a strong, cyclonic-scale disturbance that originates over tropical oceans. Distinguished from weaker systems (often named tropical disturbances or depressions) by exceeding a threshold wind speed. A tropical storm is a tropical cyclone with one-minute average surface winds between 18 and 32 m s-1. Beyond 32 m s-1, a tropical cyclone is called a hurricane, typhoon, or cyclone, depending on geographic location.\""},"unep":{"term":"UNEP","definition":""},"unfccc":{"term":"UNFCCC","definition":"\"Stands for the United Nations Framework Convention on Climate Change. This is an international treaty, signed at the Earth Summit in Rio de Janeiro in 1992, which stated that countries should work to stabilise greenhouse gas concentrations in the atmosphere to avoid dangerous climate change.\""},"united nations framework convention on climate change (unfccc)":{"term":"United Nations Framework Convention on Climate Change (UNFCCC)","definition":"The UNFCCC was adopted in May 1992 and opened for signature at the 1992 Earth Summit in Rio de Janeiro. It entered into force in March 1994 and as of May 2018 had 197 Parties (196 States and the European Union). The Convention\u2019s ultimate objective is the \u2018stabilisation of greenhouse gas concentrations in the atmosphere at a level that would prevent dangerous anthropogenic interference with the climate system.\u2019 The provisions of the Convention are pursued and implemented by two treaties: the Kyoto Protocol and the Paris Agreement."},"vulnerability":{"term":"Vulnerability","definition":"The propensity or predisposition to be adversely AI affected. Vulnerability encompasses a variety of concepts and elements including sensitivity or susceptibility to harm and lack of capacity to cope and adapt."},"well being":{"term":"Well Being","definition":"\"A state of existence that fulfils various human needs, including material living conditions and quality of life, as well as the ability to pursue one\u2019s goals, to thrive, and feel satisfied with one\u2019s life. Ecosystem well-being refers to the ability of ecosystems to maintain their diversity and quality.\""},"wildlife conservation":{"term":"Wildlife Conservation","definition":"and adapt."}};


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

  if(typeof(definitions[term.toLowerCase()]) != "undefined")
  {
    deffy = definitions[term.toLowerCase()];

  }
  else
  {
    deffy = {definition: "NOT FOUND", term: "Uh oh"};
  }
  

  var _html = '<div id="x"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L17 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 1L1 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  _html = _html + "<h3><span class='bracket'>[</span> " + termCapped + " <span class='bracket'>]</span></h3><p>" + deffy.definition + "</p>";
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