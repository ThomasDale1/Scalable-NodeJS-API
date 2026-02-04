import {Router} from 'express'
import { listProducts, createProduct, updateProduct, getProductById, deleteProduct } from './productsController.js'
import { validateData } from '../../middlewares/validationMiddleware.js'
import {z} from 'zod'
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { productsTable } from '../../db/productsSchema.js';
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware.js';


const createProductSchhema = createInsertSchema(productsTable)

const router = Router()

router.get('/', listProducts)
router.post('/', verifyToken, verifySeller, validateData(createProductSchhema), createProduct)
router.get('/:id', getProductById)
router.delete('/:id', verifyToken, verifySeller, deleteProduct)
router.put('/:id', verifyToken, verifySeller, updateProduct)

export default router