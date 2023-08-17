const logger = require('./logger')

const requestLogger = (request,response,next) => {
    logger.info(`---Request Initiated---\nMethod:${request.method}\nPath:${request.path}\nBody:${request.body}\n---`)
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

module.exports = {
    requestLogger,
    unknownEndpoint,
}