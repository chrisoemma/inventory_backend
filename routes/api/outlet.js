import express from 'express'
import {getOutlets}  from '../../controllers/OutletsController'


const router = express.Router();

router.get('/',getOutlets);

export default router;

