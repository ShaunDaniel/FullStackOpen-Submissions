const express = require('express')
const {info,error} = require('./utils/logger')
const {PORT, mongourl} = require('./utils/config')
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const {requestLogger,unknownEndpoint} = require('./utils/middleware')
const blogRouter = require("./controller/blogs")

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)
app.use(requestLogger,unknownEndpoint)

mongoose.connect(mongourl)
    .then((result) => {
        info("Connected to Database!")
    }).catch((err) => {
        error(err)
    });



app.listen(PORT, () => {
  info(`Server running on port ${PORT}`)
})