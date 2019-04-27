function startMap() {
  const ironhackSAO = {
      lat: -23.5617326,
      lng: -46.6623218
  };
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackSAO
    }
  );
  const myMarker = new google.maps.Marker({
    position: ironhackSAO,
    map: map,
    title: "I'm here"
  });

  // Try to get a geolocation object from the web browser
  if (navigator.geolocation) {

    // Get current position
    // The permissions dialog will pop up
    navigator.geolocation.getCurrentPosition(function (position) {
      // Create an object to match Google's Lat-Lng object format
      const center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('center: ', center)
      // User granted permission
      // Center the map in the position we got
    }, function () {
      // If something goes wrong
      console.log('Error in the geolocation service.');
    });
  } else {
    // Browser says: Nah! I do not support this.
    console.log('Browser does not support geolocation.');
  }
}

startMap();