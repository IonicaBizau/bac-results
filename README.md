bac-results
===========

A daemon to email the user when the baccalaureate results are posted on the official website.

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
