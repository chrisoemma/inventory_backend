import express from 'express'
import { getPaymentMethods,newPaymentMethod,deletePaymentMethod,editPaymentMethod } from '../../controllers/PaymentMethodController';


const router = express.Router();

router.get('/',getPaymentMethods);
router.post('/new_payment_method',newPaymentMethod);
router.delete('/delete_payment_method/:methodId',deletePaymentMethod);
router.patch('/edit_payment_method/:methodId',editPaymentMethod);


export default router;

