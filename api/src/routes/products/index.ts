import {Router} from 'express'
import { listProducts, createProduct, updateProduct, getProductById, deleteProduct } from './productsController'
import { validateData } from '../../middlewares/validationMiddleware'
import {z} from 'zod'
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { productsTable } from '../../db/productsSchema';
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware';


const createProductSchhema = createInsertSchema(productsTable)

const router = Router()

router.get('/', listProducts)
router.post('/', verifyToken, verifySeller, validateData(createProductSchhema), createProduct)
router.get('/:id', getProductById)
router.delete('/:id', verifyToken, verifySeller, deleteProduct)
router.put('/:id', verifyToken, verifySeller, updateProduct)

export default router