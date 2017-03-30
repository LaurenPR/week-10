// Leaflet map setup
var map = L.map('map', {
  center: [39.923004, -75.183477],
  zoom: 13
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// To add your Carto visualization, change cartoUserName and cartoVizId to your username and
// project ID. These values can be found in the URL of your map on Carto:
// - https://[cartoUserName].carto.com/[cartoVizId]

// Unfortunately, only some visualizations styles are available in this method:
//
// - None
// - Animated
// - Pixel
//
// This is a bummer. But don't worry, we'll learn about how to do more powerful visualizations
// with Carto next week when we learn about SQL

// To add visualizations created with the Analysis feature, you will need to export the data to a
// GeoJSON. From there, you can either import the GeoJSON to Carto or use Leaflet's L.geoJson.


// THIS DOES NOT WORK ON THIS COMPUTER!
// var cartoUserName = 'laurenpr';
// var cartoVizId = '0ba78288-10d5-11e7-86a9-0e3ff518bd15';
//
// var layerUrl = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId+'/viz.json';
//
// cartodb.createLayer(map, layerUrl)
//   .on('done', function(layer) {
//     layer.addTo(map);
//   }).on('error', function(err) {
//     console.log(err);
//   });


// Initial Test Map
// cartodb.createLayer(map, {
//   //change your username below
//   user_name: 'laurenpr',
//   type: 'cartodb',
//   sublayers: [{
//     //change your sql below
//     sql: "SELECT * FROM philadelphia_historic_streets",
//     //change your cartocss below. you can copy it from the CartoDB Editor and remove the line breaks.
//     cartocss: "#layer {line-color: #3EBCAE;  line-width: 1.5;  line-opacity: 1;}"
//   }]
// })
// .addTo(map);

// Shows "Influence" aka ~1000 meters around each street (Would be nice if they combined this into one geometry vs. the overlapping circles), exported and re-imported as geoJSON
// cartodb.createLayer(map, {
//   //change your username below
//   user_name: 'laurenpr',
//   type: 'cartodb',
//   sublayers: [{
//     //change your sql below
//     sql: "SELECT * FROM philadelphia_historic_streets_1",
//     //change your cartocss below. you can copy it from the CartoDB Editor and remove the line breaks.
//     cartocss: "#layer['mapnik::geometry_type'=1] {  marker-width: 7;  marker-fill: #FFB927;  marker-fill-opacity: 0.9;  marker-line-color: #FFF;  marker-line-width: 1;  marker-line-opacity: 1;  marker-placement: point;  marker-type: ellipse;  marker-allow-overlap: true;} #layer['mapnik::geometry_type'=2] {  line-color: #3EBCAE;   line-width: 1.5;   line-opacity: 1;} #layer['mapnik::geometry_type'=3] {  polygon-fill: #374C70;  polygon-opacity: 0.9;  polygon-gamma: 0.5;  line-color: #FFF;  line-width: 1; line-opacity: 0.5;  line-comp-op: soft-light;}"
//   }]
// })
// .addTo(map);


// Mirco data from US Census
cartodb.createLayer(map, {
  user_name: 'laurenpr',
  type: 'cartodb',
  sublayers: [{
    //change your sql below
    sql: "SELECT * FROM congressional_districts_2015",
    //change your cartocss below. you can copy it from the CartoDB Editor and remove the line breaks.
    cartocss: "#layer {  polygon-fill: #374C70;  polygon-opacity: 0.9;  polygon-gamma: 0.5;  line-color: #FFF;  line-width: 1;  line-opacity: 0.5;  line-comp-op: soft-light;}"
  }]
})
.addTo(map);
