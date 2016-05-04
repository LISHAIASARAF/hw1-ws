   
var listjson = require("./newstudents.json");



exports.getStudents = function(){
    return(listjson);

}
exports.getStudGrade = function(studentid){
   
    for(var i=0;i<listjson.length;i++){
         if(listjson[i].id == studentid){
            return(listjson[i]);
          }
    }
}   

exports.getStudentByYear = function(studentyear){
    var studarray = new Array;
     for(var i=0;i<listjson.length;i++){
         if(listjson[i].year == studentyear){
            studarray.push(listjson[i]);
         }

     } 
                
    return(studarray);
}