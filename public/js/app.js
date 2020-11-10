console.log('This is client side javascript')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    console.log(location)

    msg1.textContent = "Loading...."
    msg2.textContent = ""    

    let url = 'http://localhost:3000/weather?address=' + location
    console.log(url)
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                msg1.textContent = data.error
                msg2.textContent =''       
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecastData                  
                console.log(data.location)
                console.log(data.forecastData)
            }
        })
    })
})