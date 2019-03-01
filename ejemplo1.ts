class Estudiante{
    nombreCompleto: string;
    constructor(public Nombre: string, public Apellido: string){
        this.nombreCompleto = Nombre + " " + Apellido;
    }

}


interface persona {
    nombre: string;
    apellido: string;
}


function example(person: Estudiante){
return "hola, " + person.Nombre + " " + person.Apellido;
}
let user = new Estudiante("JORGE ARMANDO", "OCHOA VAZQUEZ");
//let user = {nombre: "jorge ochoa", apellido: "vazquez"}

document.body.innerHTML=example(user);