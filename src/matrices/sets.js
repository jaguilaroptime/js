// const myColors = ["purple", "cyan"];
// const colors = new Set(myColors);

// // Añadir al set
// colors.add("red");
// colors.add("green");
// colors.add("white");
// colors.add("yellow");
// // No permite duplicados
// colors.add("yellow");
// colors.add("yellow");
// colors.add("yellow");
// colors.add("yellow");

// // Iterar sobre el set
// for (let color of colors) {
//   console.log(color);
// }

// // Eliminar elementos del set
// console.log(colors.size);
// console.log(colors.delete("yellow"));
// console.log(colors.size);

// const text = "Welcome to the jungle!";
// console.log(text.length);
// console.log(new Set(text).values());

// // Acceder a elementos del set
// console.log(colors.has("green"));

// // Limpiar el set
// colors.clear();

// Mini ejercicio
const users = ["Juan", "Alberto", "Raúl", "María", "Laura", "Elena", "Guizmo"];
const userVisits = new Set();

function visit() {
  const userIndex = Math.floor(Math.random() * users.length);
  const user = users[userIndex];
  userVisits.has(user) &&
    console.warn(`User ${user} already visited the page!`);
  userVisits.add(user);
  console.log(userVisits);

  if (userVisits.size === users.length) {
    console.info("All users have visited the page!");
    clearInterval(interval);
    userVisits.clear();
  }
}

const interval = setInterval(visit, 300);
console.log(interval);