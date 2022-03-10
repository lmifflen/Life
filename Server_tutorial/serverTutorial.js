const { response } = require("express");
const express = require("express");
const path = require('path');


// starting express engine and setting paths
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("index", path.join(__dirname, "index"));
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

// creating api that delivers json
app.get('/api/pets', (req, res) => {
    res.json([{name: "moewsalot", species: "cat"}, {name: "barksalot", species: "dog"}])
})

// creating function that works with express 
function getWeather(req, res, next) {
    req.visitorWeather = false
    if (req.visitorWeather) {
        res.send("Please come back to our app when it is not raining.")
    } else {
    next()
    }
}
// setting function to work globaly
app.use(getWeather)

app.get('/', (req,res) => {
    res.render("")
})

app.get('/about', (req,res) => {
    res.send("This is a game of life and death created by Luke Mifflen for the first project of InceptionU Cohort 8.")
})
app.post('/result', (req, res) => {
    if (req.body.color.trim().toUpperCase() == "BLUE") {
        res.send("congrats, that is correct")
    } else{
        res.send("Incorrect, please try again.")
    }
})
app.get("/result", (req, res) => {
    
    res.send("Why are you visitng this URL?")
})
app.listen(3000)
