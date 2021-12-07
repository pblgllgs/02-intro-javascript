const saludar1 = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar1("goku"));
console.log(saludar2("goku"));
console.log(saludar3("goku"));
console.log(saludar4());

const getUser1 = () => {
  return {
    uid: "123asd",
    username: "negro_negro88",
  };
};

const getUser2 = () => ({
  uid: "123asd",
  username: "negro_negro88",
});

const user1 = getUser1();
const user2 = getUser2();

console.log(user1);
console.log(user2);

const getUsuarioActivo = (nombre) => ({
  uid: "ASDQ123",
  username: nombre,
});

const userActivo = getUsuarioActivo("Pablo");

console.log(userActivo);
