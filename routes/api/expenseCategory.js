import express from 'express'
import {getExpenseCategories}  from '../../controllers/ExpenseCategoryController'


const router = express.Router();

router.get('/',getExpenseCategories);

export default router;

