const express = require("express");
const bodyParser = require("body-parser");


const app = express(); // app is using express

app.set('view engine', 'ejs'); //setting the view engine of EJS to be used by express app

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

//globlas
let items = ["Sleep", "Code", "Wake up",];

//get request on ot the root directory
app.get("/", function (req, res) {
    let date = new Date();
    const options1 = { month: "short", year: "numeric", }
    const options2 = { weekday: "long" };
    const options3 = { day: "numeric" };
    let monthYear = date.toLocaleDateString("en-IN", options1);
    let weekDay = date.toLocaleDateString("en-IN", options2);
    let dateNum = date.toLocaleDateString("en-IN", options3);

    // rendering the initial page
    res.render("index", {
        week_day: weekDay, month_year: monthYear, date_num: dateNum, newListItems: items
    });

});

app.post("/", function (req, res) {
    items.push(req.body.todoItem);
    res.redirect("/");
});




//express app listening to port
app.listen(8080, function () {
    console.log("Server is running on port 8080")
});