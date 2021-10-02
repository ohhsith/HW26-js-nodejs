const person = require('./person') ;
class Teacher extends  person.Person {
    constructor(name, gender, age, interests, subject) {
        super(name, gender, age, interests);
        this.subject = subject; 
    }
};


exports.Teacher = Teacher;