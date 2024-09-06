import express from 'express'

const app = express();

// application-level-middleware
app.use(express.json())

app.use('/', (req, res, next) => {
    res.status(200).json({'message': 'Hello from Product Microservice'})
})
export {app}