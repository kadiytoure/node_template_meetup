const fs = require('fs');
const express = require('express');
const mustache = require('mustache');

let app = express();

app.use(express.static("public"));

app.listen(80, function() {
    console.log('Server listening on port 80...');
});