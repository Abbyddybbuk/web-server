const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Abhijeet',
        age: 35
    },
    {
        name: 'Ankur',
        age: 34
    }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>We provide you weather forecast</h1>')
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