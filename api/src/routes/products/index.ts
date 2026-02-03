import {Router} from 'express'
import { listProducts, createProduct, updateProduct, getProductById, deleteProduct } from './productsController'

const router = Router()

router.get('/', listProducts)
router.post('/', createProduct)
router.get('/:id', getProductById)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

export default router