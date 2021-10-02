const person = require('./person') ;
const student = require('./student') ;
const teacher = require('./teacher') ;

let student1 = new student.Student('lera', 'fem', 26, 'travel')
let teacher1 = new teacher.Teacher('dmitro', 'm', 36, 'interests', 'photo')
console.log(student1)
console.log(teacher1)

