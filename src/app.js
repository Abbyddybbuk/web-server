const path = require('path')//this is node core-library and does not require any npm install
const express = require('express')

const app = express()

// This is to ensure that your node projects boots-up with this folder
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Abhijeet',
//         age: 35
//     },
//     {
//         name: 'Ankur',
//         age: 34
//     }
//     ])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>We provide you weather forecast</h1>')
// })

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'Pleasant weather',
        location: 'Gwalior'
    }])
})


app.listen(3000, () => {
    console.log('Server started on port 3000')
})