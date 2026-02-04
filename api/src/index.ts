import express, {json, urlencoded} from 'express'
import productsRouter from './routes/products/index'
import authRoutes from './routes/auth/index'

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.use(urlencoded({extended: false}))
app.use(json())
app.use('/products', productsRouter)
app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})