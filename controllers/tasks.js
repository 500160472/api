import { v4 as uuidv4 } from 'uuid';
let tasks = [    
    {
        taskName: "Joshua",
        description: "Farmer",
        dateCreated: "26/02/2021 12:00:00",
        categoryEmoji: "💜",
        category: "work",
        tags: ['one', 'two', 'three'],
        userId: ""  
    }];
// LOGIC FOR ../routes/tasks.JS DEFINED ROUTES
export const getTasks = (req, res) => {
    res.send(tasks);
};
 
export const createTask = (req, res) => {
    const task = req.body;
    // PUSH task WITH UNIQUE GENEERATED task ID
    tasks.push({ ... task, id: uuidv4() });
    res.send(`task with the name ${task.firstName} added to the database!`);   
};


export const getTask = (req, res) => {
    // SAVE ID FROM REQUEST TO ID OBJECT
    const { id } = req.params;
    // GET task INFO WITH THE SAME ID
    const foundTask = tasks.find((task) => task.id === id);
    res.send(foundTask);
};


export const deleteTask = (req, res) => {
    // SAVE ID FROM REQUEST TO ID OBJECT
    const { id } = req.params;
    // GET task INFO WITH THE SAME ID
    tasks = tasks.filter((task) => task.id != id);
    res.send(`task with the ${id} deleted from the Database`);
}

export const updateTask = (req, res) => {
    // SAVE ID FROM REQUEST TO ID OBJECT
    const { id } = req.params;
    const { firstName, lastName, age, emoji } = req.body;
    const task = tasks.find((task) => task.id === id);
    if(firstName) task.firstName = firstName;
        if(lastName) task.lastName = lastName;
        if(age) task.age = age;
        if(age) task.emoji = emoji;
    // GET task INFO WITH THE SAME ID
    res.send(`task with the ${id} has been updated on the Database`);
}

