// Dependencies
var Statique = require("statique")
  , Http = require('http')
  ;

// Simulate bac results posting
var posted = false;
setTimeout(function () {
    posted = true;
}, 10 * 1000);

// Statique config
Statique.setRoutes({
    "/": function (req, res) {
        if (!posted) {
            return Statique.error(req, res, 404, "Hey you, nothing here yet.");
        }
        return Statique.error(req, res, 200, "Awesome results.");
    }
});

// Create server
Http.createServer(Statique.serve).listen(8000);

// output
console.log("Listening on 8000.");
