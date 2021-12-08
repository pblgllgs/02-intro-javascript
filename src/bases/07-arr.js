const personajes = ["goku", "vegeta", "trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornaArr = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArr();

console.log(letras);
console.log(numeros);


const useState = (valor) => {
    return [valor,  () => { console.log('Hola mundo')}]
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre,setNombre] = useState( 'goku');

console.log(nombre)
setNombre();
