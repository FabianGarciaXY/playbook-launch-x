
// Ejemplo 6: Getters para acceder a los atributos del objeto
console.log("Ejemplo 6: Getters para acceder a los atributos del objeto");

class Developer {

    constructor(name, age, stack) {
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.excercisesCompleted = 0;
    }

    // Un getter es un metodo para poder accerder a los atributos de una clase
    get getProjectsCompleted() {
        return this.excercisesCompleted;
    }
}

const fabian = new Developer('Fabian', 23, ['JS', 'Node', 'Vue']);
// Para usar el getter simplemente la llamamos como una propiedad
console.log(fabian.getProjectsCompleted);
