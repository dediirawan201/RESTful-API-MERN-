import express from 'express';
import { getProductById, getProducts,saveProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id',getProductById);
router.post('/', saveProduct);
router.patch('/:id', updateProduct);
router.delete('/:id');

export default router;