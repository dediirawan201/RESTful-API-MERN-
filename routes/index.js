import express from 'express';
import { getProducts,saveProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id');
router.post('/', saveProduct);
router.patch('/:id', updateProduct);
router.delete('/:id');

export default router;