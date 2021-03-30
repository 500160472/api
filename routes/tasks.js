// MAIN IMPORTS
import express from 'express';
import { getTasks, createTask, getTask, deleteTask, updateTask } from '../controllers/tasks.js';
/// ALL ROUTES BELOW USER '/tasks' TO START - DEEFINED IN 'index.js ///

// SET UP ROUTER
const router = express.Router();

      
    // USERS GET HOME ROUTE - GET ALL USERS
    router.get('/', getTasks);
            // USERS POST - CREATE NEW USERS
            router.post('/', createTask);
            // GET USER INFORMATION FROM ID
            router.get('/:id', getTask);
            //DELETE USER
            router.delete('/:id', deleteTask);
            //PATCH / UPDATE USER   - PUT OVERWRITES / PATCH PARTIALLY CHANGES
            router.patch('/:id', updateTask);
// EXPORT BACK TO 'index.js'

export default router;