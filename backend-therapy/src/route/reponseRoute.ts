import express  from 'express';

import getAllreponsesBYID, { deletereponse, postReponse, updatereponse } from "../controller/reponseController"

const router = express.Router();
//get
router.route('/reponse/:id').get(getAllreponsesBYID);


//post
router.route('/reponse').post(postReponse);

//update 
router.route('/reponse/:id').put(updatereponse);

 //delete
 
router.route('/reponse/:id').delete(deletereponse);

export default router;