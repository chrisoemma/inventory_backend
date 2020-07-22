import express from 'express'
import {getExpenses}  from '../../controllers/ExpenseController'


const router = express.Router();

router.get('/',getExpenses);

export default router;

