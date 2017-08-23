const fs = require('fs');
const express = require('express');
const mustache = require('mustache');

let app = express();

let events = [];

app.get("/template", function(req, resp) {
    resp.render('index', {
        name: 'Toto',
        adjective: 'Happy'
    });
});
/*
app.get("/template", function(req, resp) {
    let str = mustache.render("Hello {{name}}!!! You are beautiful!", {
        name: "mimi"
    })
    resp.send(str)
});
*/
app.engine("html", function(path, options, callback) {
    fs.readFile(path, function(err, content) {
        if (err) {
            console.error("fail to open template:", err);
            return callback(err);
        }
        let str = mustache.render(content.toString(), options);
        return callback(null, str);
    })
});
app.set('views', './template');
app.set('view engine', 'html');
app.use(express.static("public"));

app.listen(80, function() {
    console.log('Server listening on port 80...');
});