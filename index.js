// MAIN APP IMPORTS
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

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
    // -- HOMEPAGEE [index.js]
    app.get('/', (req,res) =>  res.send('Hello from [HOMEPAGE]') );
    // -- USERS [/routes/users.js] - usersRoutes
    app.use('/users', usersRoutes);
    app.use('/python', python);



//START EXPRESS JS SERVER
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))