'use strict';
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const helloNames = names.map(function(name) {
  return `Bienvenida ${name}`;
});

console.log(helloNames);