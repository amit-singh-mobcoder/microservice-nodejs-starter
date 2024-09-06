import express from 'express'
import cors from 'cors'
import proxy from 'express-http-proxy'

const app = express();

// application-level-middleware
app.use(cors())
app.use(express.json())

app.use('/customer', proxy('http://localhost:8001'))
app.use('/product', proxy('http://localhost:8002'))

app.listen(8000, () => {
    console.log('API Gateway is listening at PORT: 8000')
})