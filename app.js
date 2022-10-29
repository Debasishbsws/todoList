require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';


const app = express(); // app is using express

app.set('view engine', 'ejs'); //setting the view engine of EJS to be used by express app

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

//globlas
let items = ["Sleep", "Code", "Wake up",];

//get request on ot the root directory
app.get("/", function (req, res) {
    // let date = new Date();
    // const options1 = { month: "short", year: "numeric", }
    // const options2 = { weekday: "long" };
    // const options3 = { day: "numeric" };
    let monthYear = date.monthYear();
    let weekDay = date.weekDay();
    let dateNum = date.dateNum();

    // rendering the initial page
    res.render("index", {
        week_day: weekDay, month_year: monthYear, date_num: dateNum, listItems: items
    });

});

app.post("/", function (req, res) {
    items.push(req.body.todoItem);
    res.redirect("/");
});


//express app listening to port
app.listen(PORT, HOST, () => {
    console.log("Server is running on port " + PORT)
});