

/*============ HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes =============*/
console.log('Ejemplo  9: Herencia entre dos clases');

class Developer {

    constructor(name, language, skills){

        this.name = name;
        this.language = language;
        this.skills = skills;    
    }

    get getName() {
        return this.name;
    }
}

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class NodeJsDeveloper extends Developer {
}

// Ahora podemos definir las mismas propiedades que con la clase Developer
const Fabian = new NodeJsDeveloper('Fabian', 'JS', ['co-working', 'Resilience', 'Anxiety xd']);

console.log(Fabian);
console.log(Fabian.getName);

