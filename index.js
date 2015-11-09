// Dependencies
var Request = require("request")
  , Mandrill = require("mandrill-api/mandrill")
  , Config = require("./config")
  , MandrillClient = new Mandrill.Mandrill(Config.mandrillKey)
  , Http = require("http")
  , Url = require("url")
  , Cheerio = require("cheerio")
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
          , text: Config.text + "\n\n" + REQ_URL
        }
    }, function(result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
}

function checkUrl() {
    Request(REQ_URL, function (error, response, body) {
        if (!oldHtml) {
            oldHtml = newHtml = body;
            setTimeout(checkUrl, Config.timeout || 1000);
            return;
        }
        oldHtml = newHtml;
        newHtml = body;
        $1 = Cheerio.load(newHtml);
        $2 = Cheerio.load(newHtml);

        console.log($1("#ContentPlaceHolderBody_LabelTitle").text())


        if (newHtml !== oldHtml) {
            if ($1("#ContentPlaceHolderBody_LabelTitle").text() !== $2("#ContentPlaceHolderBody_LabelTitle")) {
                return sendEmail();
            }
        }
        setTimeout(checkUrl, Config.timeout || 1000);
    });
}

checkUrl();
