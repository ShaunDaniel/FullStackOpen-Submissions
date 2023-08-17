require('dotenv').config()

const PORT = process.env.PORT
const mongourl = process.env.mongourl

module.exports = {
    PORT,mongourl
}