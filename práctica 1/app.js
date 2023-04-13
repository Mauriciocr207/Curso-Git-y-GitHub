import { sum } from "./sum";
import { Persona } from "./persona";

(() => {
    const welcome = 'hola mundo!';
    console.log(welcome);
    console.log(getSum([1,2,3]));
    const persona1 = new Persona('Carlos', 'Pan');
    console.log(`Hola, soy ${persona1.nombre} ${persona1.apellido} y 1 + 5 es: ${sum([1,5])}`);

})();