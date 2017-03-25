require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/tasks/query",
    "esri/tasks/StatisticDefinition",
    "esri/geometry/geometryEngine",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/graphic",
    "esri/Color",
    "dojo/dom",
    "dojo/domReady!"
], function(Map, FeatureLayer, Query, StatisticDefinition, geometryEngine,
            SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Graphic, Color, dom) {


    console.log("load");

    var map = new Map("map", {
        basemap: "streets-night-vector",
        center: [-122.304568, 47.608492],
        zoom: 13
    });

    var hits = new FeatureLayer("https://services7.arcgis.com/Gk8wYdLBgQPxqVZU/arcgis/rest/services/RedSox/FeatureServer/0",{

        outFields:["*"]
    });

    map.addLayer(hits);

});