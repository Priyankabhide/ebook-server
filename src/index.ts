import express, { response } from 'express'
import { request } from 'http'

const app = express()

const port = process.env.PORT || 8989

app.listen(port, () => {
    console.log(`The application is running on port http://localhost:${port}`)
})

app.get('/', (request, response) =>{
    response.send("<h1>This is our App!!!</h1>")
})
app.get('/login', (request, response) =>{
    response.send("<h1>This is our Login Page !!</h1>")
})