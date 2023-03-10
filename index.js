const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const mycourses = require('./data/fakedata.json');


app.get("/", (req, res) => {
    res.send('News api running');
})
app.get("/mycourses", (req, res) => {
    res.send(mycourses);
})
app.get('/mycourses/:id', (req, res) => {
    const id = req.params.id;
    const eachCourse = mycourses.find(course => course.id === id);
    res.send(eachCourse);
})

app.listen(port, () => {
    console.log('my assign10 server running', port);
})