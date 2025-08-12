import express  from 'express';

import getAllMoods from "../controller/historyController"

import {addHistory} from "../controller/historyController"

const router = express.Router();
//get
router.route('/history').get(getAllMoods);

//post 
router.route('/history').post(addHistory);

export default router ;