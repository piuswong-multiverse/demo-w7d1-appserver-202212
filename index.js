// App Server code goes here
// Display animals when you visit website
// display different animals depending on the url visited

const express = require('express');
const app = express();
const port = 3001;

const {Animals} = require('./models/index')

app.get('/', async (request, response) => {
    // read data from database
    const animals = await Animals.findAll(); 
    // send out the animals data
    response.json(animals);
})

app.get('/animal', async (req, res) => {
    const animals = await Animals.findAll();
    res.send(animals[0]);
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})