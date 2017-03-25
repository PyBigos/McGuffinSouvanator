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


    //format
    String.format = function() {
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = arguments[0];

        // start with the second argument (i = 1)
        for (var i = 1; i < arguments.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }

        return theString;
    }

    //Find the options submitted
    //on(dom.byId("btnLocate"), "click", doAddressToLocations);

    var park = "A"//dom.byId("park").value;
    var team = "c"//dom.byId("team").value;
    //var dTime = dom.byId("dTime").value;
    //var inning = dom.byId("inning").value;

    //Build query Object
    var query = new Query();


    if (park && park.value) {
        console.log(park & " My input has a value!");
    }

    if (team && team.value) {
        console.log("team = '" &team&"'");
    }



    var link = String.format('{0},{1}', park,team);

    console.log(link);

    //Pitch this to the graph
    hits.on("query-features-complete",function(queryRes){

        console.log(queryRes.features.length);


    });




});