# Final Project Proposal: Anti-Gerrymandering Awareness Map
~Lauren Payne-Riley


## Problem / Question

Applications are ultimately just tools. What problem or question does your application attempt to resolve or grapple with? How does your application speak to this problem/question?


## The data

•	Historic District boundaries: https://github.com/JeffreyBLewis/congressional-district-boundaries (1789 to 2012)
•	More recent District boundaries: https://github.com/unitedstates/districts
•	Also, there is also historic district & political boundaries available from https://www.nhgis.org/
•	User Data (street address) will be collected using the Mapzen API.

## Technologies used

•	leaflet - basemaps
•	turf - simple calculations to see if the user input point lies within a given district boundary; postgres SQL might prove to be a better option using Carto
•	jQuery - to import html data (ajax call)
•	Bootstrap - user interface
•	Carto - for spatial analysis of demographic data
•	Mapzen API to geolocate address
•	I would also like to use D3 to create a map that automatically stwitches between district boundaries for the state, as well as web-scrapping to collect the current elected representatives by district.
•	more, I'm sure...

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
	•	Who are the users? Pennsylvania Voters
	•	What do they gain from your application' use?
	•	Are there any website/application examples in the wild to which you can compare your final? possibly Azavea’s (no longer updated) District Builder

#### Layouts and visual design

Conceptually I would like a big map to take up most of the page, with a smaller “toolbar” floating near a corner. This “toolbar” would let users select a state/county with a dropdown or enter their address. Once this was selected the “toolbar” would likely expand and offer additional options, such as demographics of the area, changes in median income with re-districting, etc.


## Anticipated difficulties

Will require some digging in order to find past representatives party affiliations (web scrapping?). Still haven't found a good resources for this yet.

Not sure how to expand the project or what else to show about the districts. Perhaps look at demographic
and economic data (population, median income, race, etc.).

## Missing pieces

D3 for animated map & web-scrapping (from the data wrangling & visualization class)
