import express  from 'express';
import { adduser} from '../controller/UserController';


 const router = express.Router();
 

//post
router.route('/register').post(adduser);

 export default router ;
 /*It exports your router so that you can import it in index.ts (or wherever your Express app is configured).

This lets Express know: "Here are all the routes related to questions."*/