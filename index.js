// App Server code goes here
// Display animals when you visit website
// display different animals depending on the url visited

const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})