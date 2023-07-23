const express = require("express")
const { createServer } = require("http")
const Artsy = require("artsy")

const app = express()
const httpServer = createServer(app)

const PORT = 8080;

app.get("/", (req, res) => {
    res.send(`Welcome to port ${PORT}`)
})

var client = new Artsy({ token: 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1MDMxOTUzZS1iYjY4LTQ1MzUtOGMyMC02MGY3OTY2MDg3MDIiLCJleHAiOjE2ODk3MTEyNjgsImlhdCI6MTY4OTEwNjQ2OCwiYXVkIjoiNTAzMTk1M2UtYmI2OC00NTM1LThjMjAtNjBmNzk2NjA4NzAyIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0YWRiODI0NjQ2NzliMDAwY2YwMWYwOCJ9.B1_Eo7R-YkBYcePQhIKEgq3CHpdj57nRNR-00aiMkFE'})

/*client.artists.get('jackson-pollock', (err, artist) => {
    console.dir(artist) 
})*/

app.get("/artist", (req, res) => {
    console.log('client', client)
    2
    res.send('test response')
})

httpServer.listen(PORT, console.log(`Listening to activity on ${PORT}`))