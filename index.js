import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = process.env.PORT || 5000
const DB_URL = 'mongodb+srv://admin:wwwwww@cluster0.2pbhfnm.mongodb.net/test?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}...`))
    } catch (err) {
        console.log(err)
    }
}

startApp()

