import express  from 'express';
import getAllquestions, { postquestions, updateQuestion } from "../controller/questionController"
import { deletequestion} from '../controller/questionController';

 const router = express.Router();
 
//get
 router.route('/questions').get(getAllquestions);



//post
router.route('/question').post(postquestions);

//update 
router.route('/question/:id').put(updateQuestion);

 //delete
 
router.route('/question/:id').delete(deletequestion);
 
 export default router ;
 /*It exports your router so that you can import it in index.ts (or wherever your Express app is configured).

This lets Express know: "Here are all the routes related to questions."*/