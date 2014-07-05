// Dependencies
var Mandrill = require("mandrill-api/mandrill")
  , Config = require("./config")
  , MandrillClient = new Mandrill.Mandrill(Config.mandrillKey)
  , Http = require("http")
  , Url = require("url")
  ;

// The request url where the results are supposed to be posted
const REQ_URL = Url.parse(
    Config.reqUrl || "http://static.bacalaureat.edu.ro/2014/rapoarte/BH/index.html"
);

// This becomes `true` once the email is submitted.
var sent = false;


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
    var options = {
        method: 'HEAD'
      , host: REQ_URL.host
      , port: 80
      , path: REQ_URL.path
    }
  , req = Http.request(options, function(res) {
        if (res.statusCode !== 404) {
            return sendEmail();
        }
        checkUrl();
    });

    req.end();
}

checkUrl();
