import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { spawn } = require('child_process');



// LOGIC FOR ../routes/PYTHON.JS DEFINED ROUTES
export const runPython1 = (req, res) => {
    const ls = spawn('python', ['controllers/python.py', 'hello']);


    ls.stdout.on('data', (data) => {
        res.send(`stdout: ${data}`);
      });
      
      ls.stderr.on('data', (data) => {
        res.send(`stderr: ${data}`);
      });
      
    //   ls.on('close', (code) => {
    //     res.send(`child process exited with code ${code}`);
    //   });
      
    // sends a message to the Python script via stdin
    // pyshell.send('hello');
    
    
    
    



}
 