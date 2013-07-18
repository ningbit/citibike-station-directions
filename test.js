
var start_address= "Union square NYC";
var end_address="Times Square NYC";
//Convert addresses to lat,lng
function getLatLng(start, end, callback) {
  var geocoder = new google.maps.Geocoder();
    // geocode the start
  geocoder.geocode({'address': start}, function(results, status) {  
    if (status == google.maps.GeocoderStatus.OK) {
      var startlat = results[0].geometry.location.lat();
      var startlng = results[0].geometry.location.lng();
      console.log('Got start: ' + startlat + ', ' + startlng);

      // geocode the end
      geocoder.geocode({'address': end}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var endlat = results[0].geometry.location.lat();
          var endlng = results[0].geometry.location.lng();
          console.log('Got end: ' + endlat + ', ' + endlng);
            //return [startlat, startlng, endlat, endlng];
          // invoke the callback function
          callback(startlat, startlng, endlat, endlng);
        }
      });
    }
  });
}

// the third parameter provided here to getLatLng is the callback function:
getLatLng(start_address, end_address, function(start_lat, start_lng, end_lat, end_lng) {
    //This is the rest of the code
    var start_p = new google.maps.LatLng(start_lat, start_lng);
    var end_p = new google.maps.LatLng(end_lat, end_lng);
    console.log(start_p);
    console.log(end_p);
    //var start_station = findNearestStation(start_p);
    // var end_station = findNearestStation(end_p);
    // etc
});


// function getDistance(lat1,lng1,lat2,lng2) {
//       //Lat1 is apparently being passed as a whole thing, lng2 is empty

//       var i = lat1 - lat2;
//       var j = lng1 - lng2;
//       return i*i + j*j;
//     }

//     function findNearestStation(lat,lng) {
//       console.log(lat);
//       console.log(lng);
//       var min_distance = 99999;
//       var closest_station_id;
//       $.each(stations.stationBeanList, function(i, station) {
//         var distance = getDistance(lat,lng, station.latitude, station.longitude);
//         //alert(lng);

//         if (distance < min_distance) {
//           min_distance = distance;
//           closest_station_id = i;
//         }
//       });

//       console.log('Closest station idx: ' + closest_station_id);
//       return stations.stationBeanList[closest_station_id];
//     }