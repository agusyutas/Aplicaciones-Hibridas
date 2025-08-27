const Alumno = require('./Alumno.js');

const alumno1 = new Alumno("Juan", "Pérez", 20, "Sistemas Operativos");

console.log("Datos:", alumno1.obtenerDatos());
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Edad actual:", alumno1.retornarEdad());

alumno1.modificarEdad(21);
console.log("Edad modificada:", alumno1.retornarEdad());

alumno1.agregarMaterias("Aplicaciones Hibridas");
alumno1.agregarMaterias("Programación");
alumno1.agregarMaterias("Bases de Datos");

console.log("Materias:");
alumno1.mostrarMaterias();