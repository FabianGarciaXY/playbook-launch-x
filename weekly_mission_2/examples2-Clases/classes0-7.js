

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
// Ejemplo 7: Setters para modificar los atributos del objeto

class Food {

    constructor(name, ingredients) {

        this.name = name;
        this.ingredients = ingredients;
        this.cost = 0;
        this.quantity = 0;
    }

    get getCost() {
        return this.cost;
    }

    get getQuantity() {
        return this.quantity;
    }

    // Para modificar una propiedad usamos el metodo get con un nombre y un parametro para realizar la modificación.
    set setCost(cost) {
        return this.cost = cost;
    }

    set setQuantity(quantity) {
        return this.quantity = quantity;
    }
}

const newFood = new Food('Tacos', []);

console.log(newFood.getCost) // Valor por default 0
console.log(newFood.getQuantity) // 0

// Para realizar una modificación usamos el operador de asignación
newFood.setCost = 60;
newFood.setQuantity = 5;

// Ahora obtenemos las propiedades con los valores modificados.
console.log(newFood.getCost);
console.log(newFood.getQuantity);