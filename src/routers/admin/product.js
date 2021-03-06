import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
  searchProduct
} from '../../controllers/admin/productController';
import { verifyTokenAndAdmin, verifyTokenAndAdminAndStaff } from '../verifyToken';

let router = express.Router();

router.get('/', verifyTokenAndAdmin, getProduct);
router.post('/', verifyTokenAndAdminAndStaff, createProduct);
router.get('/search', searchProduct);
router.get('/:id', verifyTokenAndAdmin, getProductById);
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);
router.put('/:id', verifyTokenAndAdminAndStaff, updateProduct);

module.exports = router;