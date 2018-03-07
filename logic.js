// Store our API endpoint inside queryUrl
// var queryUrl = "http://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_20m.json";
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=" +
  "pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ.T6YbdDixkOBWH_k9GbS8JQ").addTo(myMap);

var geojson;
// Perform a GET request to the query URL
d3.json("Resources/map.json", function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    geojson = L.choropleth(data, {
        // Which property in the features to use
            valueProperty: "MHI",
            // Color scale
            scale: ["#ffffb2", "#b10026"],
            // Number of breaks in step range
            steps: 10,
            // q for quantile, e for equidistant, k for k-means
            mode: "q",
            style: {
                // Border color
                color: "#fff",
                weight: 1,
                fillOpacity: 0.8
            },
            // Binding a pop-up to each layer
            onEachFeature: function(feature, layer) {
                layer.bindPopup(feature.properties.NAME);
            }
        }).addTo(myMap);
    
        // Setting up the legend
        // var legend = L.control({
        //     position: "bottomright"
        // });
        // legend.onAdd = function() {
        //     var div = L.DomUtil.create("div", "info legend");
        //     var limits = geojson.options.limits;
        //     var colors = geojson.options.colors;
        //     var labels = [];
    
            // Add min & max
    //         var legendInfo = "<h1>Median Income</h1>" +
    //       "<div class=\"labels\">" +
    //         "<div class=\"min\">" + limits[0] + "</div>" +
    //         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
    //       "</div>";
    
    //         div.innerHTML = legendInfo;
    
    //         limits.forEach(function(limit, index) {
    //             labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    //         });
    
    //         div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    //         return div;
    //     };
    
    //     // Adding legend to the map
    //     legend.addTo(myMap);
    
    });