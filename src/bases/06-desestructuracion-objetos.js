const persona = {
  nombre: "tony",
  edad: 45,
  clave: "ironman",
  //rango: 'soldado',
  poderes: {
    manos: "laser",
    piernas: "propulsores",
  },
};

const useContext = ({ nombre, edad, clave, rango = "capitan", poderes }) => {
  //console.log(nombre, edad, clave, rango, poderes);
  return {
    nombreClave: clave,
    anios: edad,
    latLgt: {
        lat:12.1654,
        lgt:-14.2568
    }
  };
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave,anios, latLgt:{lat,lgt}} = useContext(persona);

console.log(nombreClave,anios);
console.log(lat,lgt);
