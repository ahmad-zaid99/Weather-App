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


  const city=req.body.cityName;
  const apikey="881747821352d1678b36c6867d4e5155";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData=JSON.parse(data);
      const temp=weatherData.main.temp;
      const temp1=weatherData.main.feels_like;
      const des=weatherData.weather[0].description;
      const icon=weatherData.weather[0].icon;
      const ur1="http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1>"+city+"</h1><h2>Temperature : "+temp+" &#730C \n</h2><h3>Feels like : "+temp1+" &#730C </h3><h3>Weather Description : "+des+"</h3>");
      res.write("<img src ="+ur1+" >");
      res.send();
    });
  });

});

















app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
