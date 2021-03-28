import express from 'express';
import { runPython1 } from '../controllers/python.js';
const router = express.Router();



// USERS GET HOME ROUTE - GET ALL USERS
router.get('/', runPython1);





export default router;