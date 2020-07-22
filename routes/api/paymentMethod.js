import express from 'express'
import { getPaymentMethods } from '../../controllers/PaymentMethodController';


const router = express.Router();

router.get('/',getPaymentMethods);

export default router;

