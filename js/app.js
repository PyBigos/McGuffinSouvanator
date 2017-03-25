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
        basemap: "gray",
        center: [-71.097312, 42.346567],
        zoom: 18
    });

    var hits = new FeatureLayer("https://services7.arcgis.com/Gk8wYdLBgQPxqVZU/arcgis/rest/services/RedSox/FeatureServer/0",{

        outFields:["*"]
    });

    map.addLayer(hits);


    //Inherit from a webmap

    //Find the options submitted
    //on(dom.byId("btnLocate"), "click", doAddressToLocations);

    var park = dom.byId("park").value;
    var team = dom.byId("team").value;
    var dTime = dom.byId("dTime").value;
    var inning = dom.byId("inning").value;

    //Build query Object
    var query = new Query();



    //Pitch this to the graph
    hits.on("query-features-complete",function(queryRes){

        console.log(queryRes.features.length);


    });




});