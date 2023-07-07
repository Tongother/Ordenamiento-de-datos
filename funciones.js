
//Ejercicio 1
let ordenarDeFormaDescendente = [9,3,1,6,5,88,-1,2,7];

ordenarDeFormaDescendente.sort((a, b) => b-a);

console.log(ordenarDeFormaDescendente);

//Ejercicio 2
let ordenarPorAscii = ["b","h","w","e","a"];
ordenarPorAscii.sort();
console.log(ordenarPorAscii);

//Ejercicio 3
class Alumno{
    constructor(nombre){ 
        this.elementosAlumnos = {Nombre: nombre, Calificaciones:[{c1: 0, c2: 0, c3: 0}], Promedio: 0};
    }

    obtenerPromedio(c1, c2, c3){
                this.elementosAlumnos.Calificaciones = {c1, c2, c3}; 
                this.elementosAlumnos.Promedio = (c1 + c2 + c3)/3;
                return console.log(`El promedio de este alumno es: ${this.elementosAlumnos.Promedio}`); 
    }
}

class Salon{
    constructor(){
        this.alumnosRegistrados = [];
        this.salonDeAlumnosOrdenado = [];
    }

    agregarAlumnos(alumno){
        this.salonDeAlumnosOrdenado.push(alumno);
    }

    ordenarAlumnosDeMayorAMenorPromedio(){
        this.salonDeAlumnosOrdenado.sort((a,b) => a.Promedio - b.Promedio);
        return (this.salonDeAlumnosOrdenado);
    }
}

const alumno1 = new Alumno("Guther");
const alumno2 = new Alumno("It");
const alumno3 = new Alumno("Oss");
const alumno4 = new Alumno("Davi");
const alumno5 = new Alumno("Galla");
console.log(alumno1.obtenerPromedio(8, 10, 10));
console.log(alumno2.obtenerPromedio(6, 10, 10));
console.log(alumno3.obtenerPromedio(5, 10, 10));
console.log(alumno4.obtenerPromedio(4, 10, 10));
console.log(alumno5.obtenerPromedio(3, 10, 10));

const salon1 = new Salon();
salon1.agregarAlumnos(alumno1);
salon1.agregarAlumnos(alumno2);
salon1.agregarAlumnos(alumno3);
salon1.agregarAlumnos(alumno4);
salon1.agregarAlumnos(alumno5);

console.log(salon1.ordenarAlumnosDeMayorAMenorPromedio());

//Ejercicio 4

let arregloDeElementos = ["adios","hola","maximo","uno","despedida"];

arregloDeElementos.sort((a, b) => a.length - b.length);
console.log(arregloDeElementos);

//Ejercicio 5

let arregloDeCoordenadas = [[7,3],[2,2],[1,0],[4,3]], suma= [], arregloTemporal = [], vacio=true;
    for(let n=0; n < arregloDeCoordenadas.length; n++){
        if(vacio){
            arregloTemporal[n] = arregloDeCoordenadas[n][0] + arregloDeCoordenadas[n][1];
        }
    }
arregloTemporal.sort((a, b) => a-b);

for(let u=0; u < arregloDeCoordenadas.length; u++){
    for(let i=0; i<arregloDeCoordenadas.length; i++){
        if(arregloTemporal[u] === (arregloDeCoordenadas[i][0] + arregloDeCoordenadas[i][1])){
            arregloTemporal[u] = arregloDeCoordenadas[i];
        }
    }
}
console.log(arregloTemporal);

