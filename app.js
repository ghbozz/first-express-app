const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

const users = []

app.get('/users/new', (req, res, next) => {
    res.send('<h1>Create a new user</h1><form action="/users" method="POST"><input type="text" name="name"/><button type="submit">Create!</button></form')
});

app.post('/users', (req, res, next) => {
    users.push(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    if (users.length > 0) {
        res.send(`<h1>Last user: ${users[users.length - 1].name}</h1>`)
        return false
    };
    res.send('<h1>Hello from Express !</h1>')
});

app.listen(3000);