const person = require('./person') ;
const student = require('./student') ;
const teacher = require('./teacher') ;

let student1 = new student.Student('le', 'gender', 26, 'interests')
let teacher1 = new teacher.Teacher('ololo', 'gender', 36, 'interests')
console.log(student1, teacher1)

