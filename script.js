//http://api.openweathermap.org/data/2.5/weather?lat=10.5000&lon=-66.9167&APPID=9a7d639b00eca32d0abe7e94b9811c85

var API_KEY = "9a7d639b00eca32d0abe7e94b9811c85"

$(document).ready(function(){
  
  var long;
  var lat;
  var fTemp;
  var cTemp;
  var kTemp;
  
  var tempSwap = true;
  
  $.getJSON("http://ip-api.com/json", function(data2){
    
    lat = data2.lat;
    long = data2.lon;
    //console.log(long);
    
  
  
 
      $("#data").html("latitude: " + lat + "<br>longitude: " + long)
    
  
   
  
  var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=9a7d639b00eca32d0abe7e94b9811c85";
    
    $.getJSON(api, function(data){
      
      var weatherType =  data.weather[0].description;
       kTemp = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;
      
      //Temperature in Kelvin
      fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
      //temp in F
      //city name
      
      cTemp = (kTemp - 273).toFixed(1);
      
     console.log(city);
     console.log(api);
     $("#location").html(data.name);
     $("#Temp").html(fTemp + " &#8457");
     $("#city").html(city);
     $("#weatherType").html(weatherType);
      
     $("#fTemp").html(fTemp + " &#8457");
      $("#fTemp").click(function(){
        
        if(tempSwap === false){
          $("#fTemp").html(fTemp + " &#8457");
          $("#Temp").html(fTemp + " &#8457");
          tempSwap = true;
        }else{
          $("#fTemp").html(cTemp + " &#8451");
          $("#Temp").html(cTemp + " &#8451");
          tempSwap = false;
        }
        
      });
      
    windSpeed = (2.237*(windSpeed)).toFixed(1);  
     $("#windSpeed").html(windSpeed + " mph");
      
      if(fTemp > 80){
        $("body").css("background-image", "url(http://mcpotar.com/wp-content/uploads/2015/12/short-story-hot-summer.jpg)");
      }else if(fTemp > 70){
        $("body").css("background-image", "url(https://images.unsplash.com/photo-1489517456831-3994100a43bd?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop)");
      }else if(fTemp > 40){
         $("body").css("background-image", "url(http://www.awallsnpics.com/wp-content/uploads/2016/02/Yosemite-Winter-HD-Images-With-Cold-Weather-Snow-And-Clouds.jpg)");
      }else if(fTemp <= 10){
        $("body").css("background-image", "url(http://4.bp.blogspot.com/_t-vcFiEYj44/TRKUzmTYq7I/AAAAAAAAAe8/oOvMuBh6Utk/s1600/Snow_Landscape_by_ToumeiNingen_Winter_A_Beauty_Of_Earth-s3056x2292-36879.jpg)");
      }
      
      });
      
   });
  
});
