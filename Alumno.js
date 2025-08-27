class Alumnos{
    nombre = "";
    apellido =  "";
    edad = Number;
    carrera = "";
    materias = [];

    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }

    obtenerCarrera( ){
        return `carrera: ${this.carrera}`;
    } 
    obtenerDatos( ){
        return `nombre: ${this.nombre} | apellido ${this.apellido}`;
    }  
    modificarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
    agregarMaterias( materia){
        this.materias.push(materia);
    }
    mostrarMaterias() {
        console.table(this.materias);
    }
    retornarEdad(){
        return `edad: ${this.edad}`;
    }
}

module.exports = Alumnos


