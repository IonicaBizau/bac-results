// Dependencies
var Request = require("request")
  , Mandrill = require("mandrill-api/mandrill")
  , Config = require("./config")
  , MandrillClient = new Mandrill.Mandrill(Config.mandrillKey)
  , Http = require("http")
  , Url = require("url")
  ;

// The request url where the results are supposed to be posted
const REQ_URL = Config.reqUrl || "http://static.bacalaureat.edu.ro/2014/rapoarte/BH/index.html"

// This becomes `true` once the email is submitted.
var sent = false;

var oldHtml = null
  , newHtml = null
  ;


/**
 * sendEmail
 * Sends the notification email
 *
 * @name sendEmail
 * @function
 * @return
 */
function sendEmail() {
    sent = true;
    MandrillClient.messages.send({
        message: {
            from_email: Config.from.email
          , from_name: Config.from.name
          , to: [
                {
                    email: Config.to.email
                  , name: Config.to.name
                }
            ]
          , subject: Config.subject
          , text: Config.text
        }
    }, function(result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
}

function checkUrl() {
    Request(REQ_URL, function (error, response, body) {
        debugger;
        if (!oldHtml) {
            oldHtml = newHtml = body;
            checkUrl();
            return;
        }
        oldHtml = newHtml;
        newHtml = body;
        console.log("OLD: ", oldHtml.length);
        console.log("NEW: ", newHtml.length);
        if (newHtml !== oldHtml) {
            return sendEmail();
        }
        checkUrl();
    });
}

checkUrl();
