var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;


var json = ["Tony", "Lisa", "Michael", "Ginger", "Food"];


app.use(express.json())

//GET

app.get('/', function (req, res) {
    res.json(json);

});


//POST

app.post('/', function (req, res) {
    // istruzione di Debug  per vedere il codice
    console.log(req.body);
    var name = standardize(req.body.name);

    //Semplice esempio di validazione

    if (!json.includes(name))
        json.push(name);
    res.json(json);

});

//PUT

app.put('/', function (req, res) {
    var name = standardize(req.body.from);
    const index = json.indexOf(name);
    json[index] = standardize(req.body.to)
    res.json(json);
});


//DELETE

app.delete('/', function (req, res) {
    var name = standardize(req.body.name);
    const index = json.indexOf(name);
    if (index > -1) {
        json.splice(index, 1);
    }
    res.json(json);
});

//Facciamo partire l'app

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});

//Funzione di utilità che rende maiuscolo il primo carattere di una stringa
function standardize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}