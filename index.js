const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get ('/',(req, res)=>{
    res.send('Hallo!')
})

const users = [
    { id:1, name:'sumi', email:'sumi@gmail.com' },
    { id:2, name:'mimi', email:'mimi@gmail.com' },
    { id:3, name:'moon', email:'moon@gmail.com' },
    { id:4, name:'nipa', email:'nipa@gmail.com' },
    { id:5, name:'shifa', email:'shifa@gmail.com'},
]

app.get('/users',(req,res)=>{
    res.send(users);
})
// data pathate post babohar kora hoy
app.post('/users',(req, res)=>{
    console.log('post method called', req.body);//same name dite hbe
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser);
})         
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





/**
 * have to send request object to the server
 * 1. mention method: post
 * 2. mention header: about json data in the property of content-type: application/json
 * 3. body: JSON.stringify(newUser)
 * 
 * --------------
 * on the server side use json as middleware
 * app.use(express.json())
 * 
*/