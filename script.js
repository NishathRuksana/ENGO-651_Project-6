/***************************************
 * 1. Map Initialization and Setup
 ***************************************/
var map = L.map("map").setView([51.0447, -114.0719], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var simplifiedLayer = null;
var drawnPolyline = null;

/***************************************
 * 2. Enabling User Drawing with Leaflet.draw
 ***************************************/
var drawControl = new L.Control.Draw({
  draw: {
    polyline: true,
    polygon: false,
    circle: false,
    rectangle: false,
    marker: false,
    circlemarker: false,
  },
  edit: {
    featureGroup: drawnItems,
    remove: false,
  },
});
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
  var layer = event.layer;
  drawnItems.clearLayers();
  if (simplifiedLayer) {
    map.removeLayer(simplifiedLayer);
    simplifiedLayer = null;
  }
  drawnItems.addLayer(layer);
  drawnPolyline = layer;
});

/***************************************
 * 3. Simplifying the Line with Turf.js
 ***************************************/
document.getElementById("simplify").addEventListener("click", function () {
  if (!drawnPolyline) {
    alert("No polyline detected. Please create one first!");
    return;
  }

  var geojson = drawnPolyline.toGeoJSON();
  var tolerance = 0.001;

  var simplified = turf.simplify(geojson, {
    tolerance: tolerance,
    highQuality: false,
  });

  if (simplifiedLayer) {
    map.removeLayer(simplifiedLayer);
  }

  simplifiedLayer = L.geoJSON(simplified, {
    style: {
      color: "red",
      weight: 3,
    },
  }).addTo(map);
});

/***************************************
 * 4. Resetting the Map for New Drawings
 ***************************************/
document.getElementById("reset").addEventListener("click", function () {
  drawnItems.clearLayers();
  if (simplifiedLayer) {
    map.removeLayer(simplifiedLayer);
    simplifiedLayer = null;
  }
  drawnPolyline = null;
});
