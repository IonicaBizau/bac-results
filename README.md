# bac-results [![Support this project][donate-now]][paypal-donations]

A daemon to email the user when the baccalaureate results are posted on the official website.

## Installation

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

## Documentation

### `sendEmail()`
Sends the notification email

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md