
const explorers = require('./explorers.js');

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach( (explorer) => console.log(explorer.name));

// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach( explorer => console.log(explorer.stack));

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const newList = explorers.map( explorer => explorer.stack );
console.log('Mi nueva lista es: ', newList);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const filteredList = explorers.filter( explorer => explorer.stack.includes('js'));
console.log('This is my filtered list', filteredList);

// Busca el primer explorer que sea de la CDMX, usa FIND
const firstCDMXExplorer = explorers.find( explorer => explorer.city === 'CDMX' )
console.log(firstCDMXExplorer);

// Obtén la suma de todos los exercises_completed, usa REDUCE
const sumOfExercises = explorers.reduce( (sum, value) => sum + value.exercises_completed, 0);
console.log('Sum: ', sumOfExercises);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const some = explorers.some( explorer => explorer.exercisesFinished === true);
console.log(some);

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const every = explorers.every( explorer => explorer.isFinished === true);
console.log(every);









