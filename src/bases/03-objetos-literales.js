const persona = {
    nombre : 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        cuidad: 'new york',
        zip:321565489,
        lat: 124.125,
        lng:24.2355
    }
}

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'peter'

console.log(persona);
console.log(persona2);