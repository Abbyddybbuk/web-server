const path = require('path')//this is node core-library and does not require any npm install
const express = require('express')

const app = express()

// Set-up handlebar for express to render dynamic web-content
app.set('view engine', 'hbs')

// This is to ensure that your node projects boots-up with this folder
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))//Important point to note here is that express.static as we are rendering static web-pages

app.get('', (req, res)=> {
    res.render('index', {
       title: 'Weather App',
       name: 'Abhijeet Kulshreshtha'   
    })
})

app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'About me',
        name: 'Abhijeet Kulshreshtha'   
     })
})

app.get('/help', (req, res)=> {
    res.render('help', {
        message: 'You need to help yourself'   
     })
})


app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'Pleasant weather',
        location: 'Gwalior'
    }])
})


app.listen(3000, () => {
    console.log('Server started on port 3000')
})