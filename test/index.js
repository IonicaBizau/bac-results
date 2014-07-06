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
        var msg =  "Hey you, nothing here yet.";
        if (!posted) {
            return Statique.error(req, res, 404, msg);
        }
        msg =  "Awesome results."
        return Statique.sendRes(res, 200, "text", msg);
    }
});

// Create server
Http.createServer(Statique.serve).listen(9000);

// output
console.log("Listening on 8000.");
