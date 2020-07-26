import express from 'express'
import {getExpenses,newExpense,deleteExpense,editExpense}  from '../../controllers/ExpenseController'


const router = express.Router();

router.get('/',getExpenses);
router.post('/new_expense',newExpense);
router.delete('/delete_expense/:expenseId',deleteExpense);
router.patch('/update_expense/:expenseId',editExpense);

export default router;

