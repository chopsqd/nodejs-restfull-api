import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import router from './router.js'
import {DB_URL} from './key.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
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

