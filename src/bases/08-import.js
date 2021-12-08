//import  heroes,{owners}  from "../data/heroes";

import  heroes  from "../data/heroes";

export const getHeroeById = (id) => {
  return heroes.find((item) => item.id === id);
};

//console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((item) => item.owner === owner);
};

//console.log(getHeroesByOwner("DC"));
