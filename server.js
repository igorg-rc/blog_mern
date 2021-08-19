const express = require('express')
const PORT = require('./config/keys').PORT
const mongoStart = require('./mongoose/db/start')

mongoStart()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/posts', require('./mongoose/routes/postsRoutes'))

app.listen(PORT, () => console.log(`Application is running on port ${PORT}...`))