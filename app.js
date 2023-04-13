(() => {
    const welcome = 'hola mundo!';
    console.log(welcome);
})();

class Persona {
    constructor(nombre, apellido) {
       this.nombre = nombre,
       this.apellido = apellido
    }
    saludar() {
        console.log('Hola a todos');
    }
}