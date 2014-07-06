// Dependencies
var Statique = require("statique")
  , Http = require('http')
  ;

// Simulate bac results posting
var posted = false;
setTimeout(function () {
    posted = true;
}, 30 * 1000);

// Statique config
Statique.setRoutes({
    "/": function (req, res) {
        var msg =  "Hey you, nothing here yet.";
        if (!posted) {
            console.log(msg);
            return Statique.error(req, res, 404, msg);
        }
        msg =  "Awesome results."
            console.log(msg);
        return Statique.error(req, res, 200, msg);
    }
});

// Create server
Http.createServer(Statique.serve).listen(9000);

// output
console.log("Listening on 8000.");
