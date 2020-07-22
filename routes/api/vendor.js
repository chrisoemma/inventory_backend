import express from 'express'
import {getVendors}  from '../../controllers/VendorContoller'


const router = express.Router();

router.get('/',getVendors);

export default router;

