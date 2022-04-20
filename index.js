const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('I am learning node js, Yah!!')
})

const users = [
    {id: 1, name: 'monir', email: 'monir3430@gmail.com', phone: '071'},
    {id: 2, name: 'shameem', email: 'shameem@gmail.com', phone: '071'},
    {id: 3, name: 'shohag', email: 'shohag@gmail.com', phone: '071'},
    {id: 4, name: 'tajol', email: 'tajol@gmail.com', phone: '071'},
    {id: 5, name: 'ali', email: 'ali@gmail.com', phone: '071'},
    {id: 6, name: 'karim', email: 'karim@gmail.com', phone: '071'},
    {id: 7, name: 'sharif', email: 'sharif@gmail.com', phone: '071'}
]

app.get('/users', (req, res)=>{
    
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user=>user.name.toLocaleUpperCase().includes(search))
        res.send(matched)
        console.log(matched)
    } else{
        res.send(users)
    }
    
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=> u.id === id);
    res.send(user)
})

app.post('/user',(req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user)
})

app.get('/fruits',(req, res)=>{
    res.send(['Mango', 'Banana', 'Orange'])
})

app.get('/friends', (req, res)=>{
    res.send(['Shameem', 'Ali','Runa'])
})

app.get('friends/best', (req, res)=>{
    res.send('Shameem');
})



app.listen(port,()=>{
    console.log('Yah, I am coding by express js, ki moja', port);
})
