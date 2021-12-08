import { getHeroeById } from "./bases/08-import";

const getHeroeByIdAsync = (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(valor);
      if (heroe === undefined) {
        reject("No se encontro");
      }
      resolve(heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(10).then(console.log).catch(console.warn);

