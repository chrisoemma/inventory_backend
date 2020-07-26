import express from 'express'
import {getExpenseCategories, newExpenseCategory,deleteExpenseCategory,editExpenseCategory}  from '../../controllers/ExpenseCategoryController'


const router = express.Router();

router.get('/',getExpenseCategories);
router.post('/add_expense_category', newExpenseCategory);
router.delete('/delete_expense_category/:categoryId', deleteExpenseCategory);
router.patch('/update_expense_category/:categoryId', editExpenseCategory);

export default router;

