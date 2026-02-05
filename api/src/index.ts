import express, {json, urlencoded} from 'express'
import productsRouter from './routes/products/index.js'
import authRoutes from './routes/auth/index.js'
import ordersRoutes from './routes/orders/index.js'

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.use(urlencoded({extended: false}))
app.use(json())
app.use('/products', productsRouter)
app.use('/auth', authRoutes)
app.use('/orders', ordersRoutes)

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

export default app