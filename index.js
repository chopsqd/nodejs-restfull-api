import express from 'express'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json('Bruh')
})

app.listen(PORT, (err) => {
    if(err) {
        console.log('Error: ', err)
    }
    console.log(`Server has been started on port: ${PORT}...`)
})