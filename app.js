//jshint esversion:6
const express=require("express");
const https=require("https");
const app=express();
const bodyParser=require("body-parser");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

res.sendFile(__dirname+"/index.html");

});



app.post("/", function(req, res){


  const apikey = "AIzaSyBlitm9EvJrDbe77tdjaEktd3R_x6xawYg";
  var place = "Mistimukh%20Chingrighata%20Kolkata";
        
    
        var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="
        + place + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key="
        + apikey ;

       





  const city=req.body.cityName;
  //const apikey="881747821352d1678b36c6867d4e5155";
  //const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric";
  https.get(url, function(response){
    console.log(response);

    });
  });

});

















app.listen(process.env.PORT || 3000, function(){
  
  const apikey = "AIzaSyBlitm9EvJrDbe77tdjaEktd3R_x6xawYg";
  var place = "Mistimukh%20Chingrighata%20Kolkata";
        
    
        var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="
        + place + "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key="
        + apikey ;

       





  const city=req.body.cityName;
  //const apikey="881747821352d1678b36c6867d4e5155";
  //const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric";
  https.get(url, function(response){
    console.log(response);

    });

  });

  
