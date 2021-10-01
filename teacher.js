import './person';
class Teacher extends  person.Person {
    constructor(name, gender, age, interests, subject) {
        super(name, gender, age, interests);
        this.subject = subject; 
    }
};

const person = require('./person') ;
exports.Teacher = Teacher;