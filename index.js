/*
https://github.com/buwebdev/web-340/blob/master/week-4/fms/index.js

*/
// Imports
const express = require('express')
//Import the 'path' module 
const path = require('path')
// Create an instance of the app
const app = express()
// Set the port number 
const port = process.env.PORT || 3000

// Set views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')))

//Define routs
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home',
        pageTitle: 'Landing Page'
    });
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming',
        pateTitle: 'Grooming'
    })
})


app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: "Pets-R-Us | Boarding",
        pageTitle: "Boarding"
    });
});

app.get('/training', (req, res) => {
    res.render('training', {
        title: "Pets-R-Us | Training",
        pageTitle: "Training" 
    });
});

// Start the server
app.listen(port, () => console.info(`Listening on port ${port}`))