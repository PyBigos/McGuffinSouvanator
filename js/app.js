require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/tasks/query",
    "esri/toolbars/draw",
    "esri/tasks/StatisticDefinition",
    "esri/geometry/geometryEngine",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/graphic",
    "esri/Color",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"
], function(Map, FeatureLayer, Query,Draw, StatisticDefinition, geometryEngine,
            SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Graphic, Color, dom,on) {


    console.log("load");

    var map = new Map("map", {
        basemap: "gray",
        center: [-71.097312, 42.346567],
        zoom: 18
    });

    var hits = new FeatureLayer("https://services7.arcgis.com/Gk8wYdLBgQPxqVZU/arcgis/rest/services/RedSox/FeatureServer/0",{
        definitionExpression:"description = 'Home Run'",
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
    var dTime = dom.byId("dTime").value;
    //var inning = dom.byId("inning").value;

    //Build query Object
    var query = new Query();


    if (park && park.value) {
        console.log(park & " My input has a value!");
    }

    if (team && team.value) {
        console.log("team = '" &team&"'");
    }
    if (dTime && dTime.value) {
        console.log("team = '" &dTime.value&"'");
    }



    var link = String.format('{0},{1}', park,team);

    console.log(link);

    //Pitch this to the graph
    hits.on("query-features-complete",function(queryRes){

        console.log(queryRes.features.length);


    });




    //Draw toolbar code
    function dynamicDraw() {
        /*
         * Step: Implement the Draw toolbar
         */
        var tbDraw = new Draw(map);
        tbDraw.on("draw-end", displayPolygon);
        tbDraw.activate(Draw.POLYGON);

    }

    function displayPolygon(evt) {

        // Get the geometry from the event object
        var geometryInput = evt.geometry;

        // Define symbol for finished polygon
        var tbDrawSymbol = new SimpleFillSymbol({
            "color": [
                255,
                170,
                0,
                143
            ],
            "outline": {
                "color": [
                    85,
                    255,
                    0,
                    255
                ],
                "width": 2.25,
                "type": "esriSLS",
                "style": "esriSLSSolid"
            },
            "type": "esriSFS",
            "style": "esriSFSSolid"
        });

        // Clear the map's graphics layer
        map.graphics.clear();

        /*
         * Step: Construct and add the polygon graphic
         */
        var graphicPolygon = new Graphic(geometryInput, tbDrawSymbol);
        map.graphics.add(graphicPolygon);

        query.geometry= evt.geometry;
        query.where = "description = 'Home Run";


    }


    //Button click for draw
    on(dom.byId("test"),'click',function(){
        dynamicDraw();
    });




});