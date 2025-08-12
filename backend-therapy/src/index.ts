import express,{Application,json} from "express";
import { config } from "dotenv";
import router from "./route"
import cors from 'cors';
import bodyParser from "body-parser";
const app: Application = express();
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(json());
config();
router(app)
app.listen(7000,()=>{
    console.log("Backend server is running");
})