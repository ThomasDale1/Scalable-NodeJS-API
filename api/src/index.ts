import express, {json, urlencoded} from 'express'
import productsRouter from './routes/products/index'

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.use(urlencoded({extended: false}))
app.use(json())
app.use('/products', productsRouter)

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})