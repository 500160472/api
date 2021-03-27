// MAIN IMPORTS
import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';
/// ALL ROUTES BELOW USER '/users' TO START - DEEFINED IN 'index.js ///

// SET UP ROUTER
const router = express.Router();

      
    // USERS GET HOME ROUTE - GET ALL USERS
    router.get('/', getUsers);
            // USERS POST - CREATE NEW USERS
            router.post('/', createUser);
            // GET USER INFORMATION FROM ID
            router.get('/:id', getUser);
            //DELETE USER
            router.delete('/:id', deleteUser);
            //PATCH / UPDATE USER   - PUT OVERWRITES / PATCH PARTIALLY CHANGES
            router.patch('/:id', updateUser);
// EXPORT BACK TO 'index.js'

export default router;