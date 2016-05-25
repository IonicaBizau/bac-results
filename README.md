
# bac-results

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bac-results.svg)](https://www.npmjs.com/package/bac-results) [![Downloads](https://img.shields.io/npm/dt/bac-results.svg)](https://www.npmjs.com/package/bac-results) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A daemon to email the user when the baccalaureate results are posted on the official website.

## :cloud: Installation

```sh
$ npm i --save bac-results
```


## Configuration

Create a configuration file named `config.json` (you can rename `config.templ.json`), following the template below:

```json
{
    "mandrillKey": "6hvVgv...z0Afgrag"
  , "reqUrl": "the url where are posted the results"
  , "to": {
        "email": "you@domain.com"
      , "name": "Your Awesome Name"
    }
  , "from": {
        "email": "no@spam.com"
      , "name": "BAC Exams"
    }
  , "text": "There you go!"
}
```

`reqUrl` can be, for example, this one: `"http://bacalaureat.edu.ro/Pages/JudetRezultatePartialePerProba.aspx?jud=6&tip=1&unitate=628"`.

## Have fun!

Run `node index` and sleep. :smile:


## :memo: Documentation


### `sendEmail()`
Sends the notification email



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
