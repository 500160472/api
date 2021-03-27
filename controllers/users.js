import { v4 as uuidv4 } from 'uuid';
let users = [];
// LOGIC FOR ../routes/USERS.JS DEFINED ROUTES
export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    // PUSH USER WITH UNIQUE GENEERATED USER ID
    users.push({ ... user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);   
};


export const getUser = (req, res) => {
    // SAVE ID FROM REQUEST TO ID OBJECT
    const { id } = req.params;
    // GET USER INFO WITH THE SAME ID
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};


export const deleteUser = (req, res) => {
    // SAVE ID FROM REQUEST TO ID OBJECT
    const { id } = req.params;
    // GET USER INFO WITH THE SAME ID
    users = users.filter((user) => user.id != id);
    res.send(`User with the ${id} deleted from the Database`);
}

export const updateUser = (req, res) => {
    // SAVE ID FROM REQUEST TO ID OBJECT
    const { id } = req.params;
    const { firstName, lastName, age, emoji } = req.body;
    const user = users.find((user) => user.id === id);
        if(firstName) user.firstName = firstName;
        if(lastName) user.lastName = lastName;
        if(age) user.age = age;
        if(age) user.emoji = emoji;
    // GET USER INFO WITH THE SAME ID
    res.send(`User with the ${id} has been updated on the Database`);
}

