import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// MAIN APP IMPORTS
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

require('dotenv').config();


    // IMPORT DEFINED ROUTES 
    import usersRoutes from './routes/users.js';
    import python from './routes/python.js';



//EXPRESS JS SETTINGS AND BODY PARSER FOR JSON
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors())

// MAIN APP HEREE

    //PAGE REEQUETS
   
const { auth, requiresAuth } = require('express-openid-connect');
    app.use(
    auth({
        authRequired: false, 
        auth0Logout: true,
        issuerBaseURL: 'https://iopewq.eu.auth0.com',
        baseURL: 'http://localhost:5000',
        clientID: '11zYN4tBPcZ2nhs46LimSIQaghPzvn4b',
        secret: 'wqgUdT7z5uE9nbW4Fi_eu7bcoFWdPAnzvgdG6nz8e_hw_jBhh7_N95DrVEVcLvJA',
        idpLogout: true,
    })
    );

        // -- HOMEPAGEE [index.js]
        app.get('/', (req,res) =>  res.send(req.oidc.isAuthenticated() ? 'Logged In - Hello from [HOMEPAGE]' : 'Logged Out') );

    // -- USERS [/routes/users.js] - usersRoutes
    app.use('/user', requiresAuth(), (req, res) => {
        res.send(JSON.stringify(req.oidc.user));
    });


    app.use('/users', requiresAuth(), usersRoutes);

    app.use('/python', requiresAuth(), python);




//START EXPRESS JS SERVER
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))