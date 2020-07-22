import express from 'express'
import {getLocations}  from '../../controllers/LocationsController'


const router = express.Router();

router.get('/',getLocations);

export default router;

