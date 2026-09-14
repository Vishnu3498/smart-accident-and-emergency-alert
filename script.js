function accidentDetected() {
  alert("Accident reported successfully! Emergency assistance can now be contacted.");
}
function getLocation() {
  let x = document.getElementById("location");
  x.innerHTML = "📍 Location fetch ho rahi hai...";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos){
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      x.innerHTML = `Lat: ${lat}<br>Lon: ${lon}<br><a href='https://maps.google.com/?q=${lat},${lon}' target='_blank'>Open in Maps</a>`;
    }, function(){
      x.innerHTML = "Demo Location: Govt Polytechnic Aurangabad<br>Please Allow Location Permission";
    });
  }
}
navigator.geolocation.getCurrentPosition(
    function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Accident Location:");
        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        // Map par marker lagaya ja sakta hai
    },
    function(error) {
        alert("Location permission allow karo.");
    }
);<script>
const marker = new google.maps.Marker({
  position: { lat: 25.5941, lng: 85.1376 },
  map: map,
  title: "My Location"
});
</script>
