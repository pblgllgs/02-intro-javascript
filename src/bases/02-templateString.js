const nombre = "pablo";
const apellido = "gallegos";

const nombrecompleto = `${nombre} ${apellido}`;

console.log(nombrecompleto);

function getSaludo(nombre){
    return 'Hola mundo '+ nombre;
}


console.log(`Este es un saludo:  ${getSaludo('Pablo')}`);