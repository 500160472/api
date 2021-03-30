import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// MAIN APP IMPORTS
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
    // IMPORT DEFINED ROUTES 
    import usersRoutes from './routes/users.js';
    import tasksRoutes from './routes/tasks.js';
    import python from './routes/python.js';
    
//EXPRESS JS SETTINGS AND BODY PARSER FOR JSON
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());


// MAIN APP HEREE
    //PAGE REEQUETS
    // -- HOMEPAGEE [index.js]
        app.get('/', (req,res) =>  res.send('Welcome to GalactAPI - <b>[HOMEPAGE]</b>'));
            // -- USERS [/routes/users.js] - usersRoutes
            app.use('/profile', (req, res) => {
                res.send(JSON.stringify(req.oidc.user));
            });
            app.use('/users', usersRoutes);
            app.use('/tasks', tasksRoutes);
            app.use('/python', python);

            
//START EXPRESS JS SERVER
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))









