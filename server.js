// =========================================================
// DEPENDENCIES
// =========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =========================================================
// EXPRESS CONFIGURATION
// =========================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + '/app/public'));
// =========================================================
// ROUTER
// =========================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// =========================================================
// LISTENER
// =========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});