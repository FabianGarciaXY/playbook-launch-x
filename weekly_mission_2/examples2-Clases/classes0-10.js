
// Ejemplo 10: Overrinding methods

console.log('Ejemplo 10: Overrinding methods');

class Person {

    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    getNameAndAge() {
        return `Student name: ${this.name}, age: ${this.age}`;
    }

}

class Student extends Person {

    constructor(name, job, age, career) {
        // Super se usa para llamar al constructor Padre 
        super(name, job, age);
        this.career = career
    }

    getInfo() {
        // llamamos el método de la clase padre
        let nameAndAge = this.getNameAndAge(); 
        // nameAndAge  es una variable de esta función, no se usa this para referenciarla.

        return `${nameAndAge}, Career: ${this.career}`
    }
}

// Instanciamos la clase Student que heredo la clase Peson
const fabian = new Student('Fabian', 'Developer', 23, 'Computer Engineering');

console.log(fabian);
console.log(fabian.getNameAndAge()); // Invocando un metodo de la clase padre
console.log(fabian.getInfo()); // Invocando un metodo de la clase hija