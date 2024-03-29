class Person {
    constructor(name, age, job = null) {
        this.name = name, 
        this.age = age, 
        this.job = job
    }
}

const person1 = new Person("Fernando", 30, "Developer");
const person2 = new Person("Maria", 23, 'DBA');
const person3 = new Person("Raul", 22);
console.log(person1, person2, person3);