var data =
[
{"rating": "2.0", "length": "6.8", "kml": "", "features": "lwed", "name": "Cutthroat Lakes", "lat": "48.0306", "lng": "-121.6637", "elevGain": 2600.0, "id": "cutthroat-lakes", "elevMax": 4180.0}, {"rating": "0.0", "length": null, "kml": "", "features": "vs", "name": "Wenatchee Mountain", "lat": "47.2811", "lng": "-120.4349", "elevGain": null, "id": "wenatchee-mountain", "elevMax": null}
];
var geoJSON = {};
geoJSON.type = "FeatureCollection";
geoJSON.features = [];

for (var i = 0; i < data.length; i++) {
    geoJSON.features[i] = {};
    geoJSON.features[i].type = "Feature";
    geoJSON.features[i].geometry = {};
    geoJSON.features[i].geometry.type = "Point";
    geoJSON.features[i].geometry.coordinates = [];
    geoJSON.features[i].geometry.coordinates.push(parseFloat(data[i].lng),parseFloat(data[i].lat));
    geoJSON.features[i].properties = {};
    for (var key in data[i]) {
      if (data[i].hasOwnProperty(key)) {
        geoJSON.features[i].properties[key] = data[i][key];
      }
    }
}
//console.log(geoJSON);
console.log('');
console.log("Actual GeoJSON: ");
console.log(JSON.stringify(geoJSON));