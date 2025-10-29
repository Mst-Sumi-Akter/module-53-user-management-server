const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})