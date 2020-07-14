const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const fetch = require('node-fetch')
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route


const params = {
  access_key: '89fa0e334c3b82558f0734c319d171d5'
}
app.get('/allFlights', async(req, res) => {
    const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${params}` 
    const response = await fetch(apiUrl)
    const json = await response.json();
    res.send(json)
})


  const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`I am listening. ${port}`)
})