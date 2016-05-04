var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var students = require("./students.js");

app.get('/students',function(req,res){
    res.send(students.getStudents());
});

app.get('/getStudGrade/:id',function(req,res){
    var studentid = req.params.id;
    res.send(students.getStudGrade(studentid));
       
});

app.get('/getStudentByYear/:year',function(req,res){
    var studentyear = req.params.year;
    res.send(students.getStudentByYear(studentyear));
});



app.listen(port);
console.log("listening on port"+port);