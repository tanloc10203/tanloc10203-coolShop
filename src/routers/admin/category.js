import express from 'express';
import {
  createCategory, 
  getCategory, 
  updateCategory, 
  deleteCategory
} from "../../controllers/admin/categoryController";
import { verifyTokenAndAdminAndStaff } from "../verifyToken";

let router = express.Router();

router.post('/', verifyTokenAndAdminAndStaff, createCategory);
router.get('/', verifyTokenAndAdminAndStaff, getCategory);
router.put('/:id', verifyTokenAndAdminAndStaff, updateCategory);
router.delete('/:id', verifyTokenAndAdminAndStaff, deleteCategory);

module.exports = router;