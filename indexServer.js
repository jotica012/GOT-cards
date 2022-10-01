const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(9091, () => console.log('Running on 9091....'));