
// Ejemplo 5: Atributos con valores por default
console.log(' Atributos con valores por default');

class Ticket {

    constructor(client, product, cost) {
        this.client = client;
        this.product = product;
        this.cost = cost;
        this.date = new Date();
    }

    getInfo () {
        return `This ticket is from the client ${this.client}, and this was created on ${this.date}`;
    }
}

const newTicket = new Ticket('Fabian Hdez', 'Hamburger', 50);

console.log(newTicket);
console.log(newTicket.getInfo());