import express from 'express'
import {getRegions}  from '../../controllers/RegionController'


const router = express.Router();

router.get('/',getRegions);

export default router;

