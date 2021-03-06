
	
// const sqlite3 = require('sqlite3').verbose();
// var fs = require('fs');

// var dbFile = './../CoD.db';
// var dbExists = fs.existsSync(dbFile);

// var db = new sqlite3.Database(dbFile, (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Connected to the CoD database.');
  



CoD = localStorage.getItem("CoDStore");
// Comparison = localStorage.getItem("CompStore");

(window).load(function () {
    localStorage.clear();
});

// query = 'SELECT TotalActivePhysicians FROM specialist WHERE Specialty==' + Comparison

// Specialist = db.all(query, [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     rows.forEach((row) => {
//       console.log(row.name);
//     });
//   });

// console.log(Specialist)

// db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   }); 


var myMap = L.map("map", {
    // Center of US
    center: [37.09, -95.71],
    zoom: 4
});
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=" +
  "pk.eyJ1IjoicnJ3b2xiZXIiLCJhIjoiY2pkd2drY203MDVtbzJ3bzF2NXUxdnNqayJ9.vzgFq7GgYJFYIJoCWDyu7g").addTo(myMap);

var geojson;
// Grabbing data with d3...
// d3.json("Resources/mhi_nyc.geojson", function(data) {
 d3.json("static/mapout.json", function(data) {
    // Creating a new choropleth layer
    geojson = L.choropleth(data, {
    // Which property in the features to use
        valueProperty: [String(CoD)],
        // Color scale
        scale: ["white", "#94f16f"],
        // Number of breaks in step range
        steps: 10,
        // q for quantile, e for equidistant, k for k-means
        mode: "q",
        style: {
            // Border color
            color: "#969a94",
            // Border intensity
            weight: 0.1,
            // Fill in intensity, less -> more transparent/LIGHTER, more -> less transparent/DARKER
            fillOpacity: 0.75
        },
        // Binding a pop-up to each layer
        onEachFeature: function(feature, layer) {
            // layer.bindPopup(feature.properties.COUNTY + ", " + feature.properties.State + "<br>Median Household Income: " +
            //     "$" + feature.properties.MHI);
            layer.bindPopup(feature.properties.NAME);
        }
    }).addTo(myMap);
    // Setting up the legend
    var legend = L.control({
        position: "bottomright"
    });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var limits = geojson.options.limits;
        var colors = geojson.options.colors;
        var labels = [];
        // Add min & max
        var legendInfo = "<h1>Percentile</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";
        div.innerHTML = legendInfo;
        limits.forEach(function(limit, index) {
            labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
    };
    // Adding legend to the map
    legend.addTo(myMap);
});
