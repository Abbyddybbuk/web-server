const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res)=> {
    res.send('Help Page for express')
})

app.get('/about', (req, res)=> {
    res.send('About this Page for express')
})

app.get('/weather', (req, res)=> {
    res.send('Weather forecast')
})


app.listen(3000, () => {
    console.log('Server started on port 3000')
})