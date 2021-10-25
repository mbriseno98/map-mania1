
var gMap;
//initMap is a callback function that is iniated as part of the Google Maps API call at the bottom
//of the HTML file
function initMap(){
    gMap = new google.maps.Map(document.getElementById('myMapID'),{
      center:  {lat: 41.878, lng:10,}, zoom: 2 });

 
      
      //Add marker for New Orleans
      var marker = new google.maps.Marker({
          position:{lat:29.9511 , lng:-90.0715}, 
          map:gMap,
          animation:google.maps.Animation.DROP, //causes marker to drop when page is loaded
        }); 
        
      //Add marker for Las Vegas
      var marker2 = new google.maps.Marker ({position:{lat:36.1699, lng:-115.1398}, map:gMap,animation:google.maps.Animation.DROP}); //causes marker to drop when page is loaded
      marker2.setIcon('http://maps.google.com/mapfiles/kml/shapes/dollar.png');

      var infoWindow = new google.maps.InfoWindow({content:'Las Vegas, Nevada. Where the House always wins.'});
      marker2.addListener('click', function(){
            infoWindow.open(gMap,marker2);

      });
    google.maps.event.addListener(gMap,'idle', function(){
        updateGame()
    });
      function updateGame(){
      console.log('function UpdateGame()!');
      var zoomLevel = gMap.getZoom()
      var inBounds = false;

      if(gMap.getBounds().contains({lat: 29.9511, lng:-90.0715})){
        inBounds = true;
      }
    
      console.log("inBounds:" +inBounds+" zoomLevel:" +zoomLevel);
    

     
    }
}

function initApplication(){
    console.log('Map Mania 1 - Starting!');
}