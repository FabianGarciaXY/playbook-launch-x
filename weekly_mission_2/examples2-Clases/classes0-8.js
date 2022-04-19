
// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

console.log("Ejemplo 8: Métodos static")

class ProgrammingLanguages {

    static getProgrammingLanguages() {
        return ['JS', 'Phython', 'Java', 'Elixir', 'Ruby']
    }
}

// Para usar este metodo basta con Invocar el nombre de la clase con el metodo.
// Sin embargo no es posible instanciar esta clase
console.log(ProgrammingLanguages.getProgrammingLanguages());