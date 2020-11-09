const path = require('path')//this is node core-library and does not require any npm install
const express = require('express')
const hbs = require('hbs')

const app = express()

// This is to ensure that your node projects boots-up with this folder...setting up for express
const publicDirectoryPath = path.join(__dirname, '../public')

//This is to ensure if the folder name (views) containing templates is changed then
// another folder name can be configured
const viewsPath = path.join(__dirname, '../templates/views')

// The below partial configuration is ensure that partials are loaded and can be used
const partialsPath = path.join(__dirname, '../templates/partials')

// Set-up handlebar for express to render dynamic web-content
app.set('view engine', 'hbs')

//Configuring views so that hbs can render dynamic content from templates folder
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        message: 'You need to help yourself',
        title: 'Help Page Title',
        name: 'Abhijeet Kulshreshtha'   
     })
})


app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'Pleasant weather',
        location: 'Gwalior'
    }])
})

app.get('/help/*', (req, res)=> {
    res.render('404', {
        title: 'Help Error Page',
        name: 'Abhijeet Kulshreshtha',           
        errorMessage: '404: I could not find any error page for you'
     })
})

app.get('*', (req, res)=> {
    res.render('404', {
        title: 'Error Page',
        name: 'Abhijeet Kulshreshtha',          
        errorMessage: '404: PAGE NOT FOUND'
     })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})