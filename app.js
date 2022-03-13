const express = require("express");
const bodyParser = require("body-parser");
// const res = require("express/lib/response");


const app = express(); // app is using express

app.set('view engine', 'ejs'); //setting the view engine of EJS to be used by express app

app.use(bodyParser.urlencoded({ extended: false }));

//get request on ot the root directory
app.get("/", function (req, res) {
    let date = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
    }
    let today = date.toLocaleDateString("en-IN", options);

    res.render("index", { day: today });

});

app.post("/", function (req, res) {
    console.log(req.body.todoItem);
    res.redirect("/"); 
});




//express app listening to port
app.listen(8080, function () {
    console.log("Server is running on port 8080")
});