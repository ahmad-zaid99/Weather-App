const fetch = require("node-fetch");
//const https = require("https");
const axios = require("axios");

const apikey = "AIzaSyBlitm9EvJrDbe77tdjaEktd3R_x6xawYg";
  var place = "Mistimukh%20Chingrighata%20Kolkata";
        
    
        var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="
        + place + "&inputtype=textquery&fields=name,rating&key="
        + apikey ;

       





  console.log(url);
  //const apikey="881747821352d1678b36c6867d4e5155";
  //const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric";
  console.log("hello");
  axios.post(url).then (function(resp){
    console.log("Working");
    console.log(resp.body);

    });

