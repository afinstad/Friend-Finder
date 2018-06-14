var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

// require ("./app/routing/htmlRoutes")(app);
// require ("./app/public/survey.html")(app);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//create json parser
// var jsonParser = bodyParser.json()

//create app form
// var urlencodedParser = bodyParser.urlendcoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }))
// Parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: "applilcation/*+json"}))
app.use(bodyParser.raw( { type: "application/vnd.custom-type"}));

//Parse html body to a string
app.use(bodyParser.text({ type: "text/html" }))

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});