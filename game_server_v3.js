const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require('path');
const port = 3000;

app.listen(port);
console.log('Server started at http://localhost:' + port);

function hello(req, res) {
  res.send("hello world");
}
app.get("/", hello);

app.get('/forest', (req, res) => {
  let daylight = req.query.daylight;
  let numberOfDragons = req.query.numberOfDragons;
  console.log(`daylight is (${daylight})`);

  let isDayLight = daylight === 'true'
  console.log(`is (${isDayLight})`);

  if (daylight === 'true') {
    res.send("You are in a deep, decently lit wood...");
  } else if (numberOfDragons === "true") {
      res.send("There are 420 dragons");
  } else {     
    res.send("You are in a deep, dark wood...");
  }
});

// Getting user name
 app.get('/start', (req, res) => {
   
   res.send("Welcome to the game of life. Please enter your name here : curl http://localhost:3000/start2?name=(${name})")
 });

 app.get('/start2', (req, res) => {
  const name = req.query.name
  const Name = JSON.stringify(name)
  res.send(`Welcome to the game of life ${name} please enter your hobby here => curl http://localhost:3000/hobby?hobby= `)
 });

// Getting hobby selection
 app.get('/hobby', (req, res) => {
   let hobby = req.query.hobby
   let hubby = JSON.stringify(hobby);
   let hu = hubby.toUpperCase
   
   console.log(`hobby is (${hobby})`);
   console.log(`hubby is (${hubby})`);
   console.log(`hubby is (${hu})`);
  

   if (hobby === 'BIKE') {
    res.send(`Player loves biking`);
  } else if (hobby === 'SWIM') {
  res.send("Player loves swimming");
 } else {
   res.send("Player is a lameo");
 }
   });

   // Getting hobby selection by passing in API
   


   let hobby2 = (req, res, next) => {
     let hobby2 = req.query.hobby2
     if (hobby2 === 'BIKE') {
      res.send(`Player loves biking`);
    } else if (hobby2 === 'SWIM') {
    res.send("Player loves swimming");
   } else {
     res.send("Player is a lameo");
   }
   next()
   }

   app.get('/hobby2', hobby2, (req, res) => {
    hobby2 });


    // importing API from a different file

    const { hobby3 } = require("./gameFunctions_v3");

    app.get('/hobby3', hobby3, (req, res) => {
      hobby3 });
