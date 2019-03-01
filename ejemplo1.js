var Estudiante = /** @class */ (function () {
    function Estudiante(Nombre, Apellido) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.nombreCompleto = Nombre + " " + Apellido;
    }
    return Estudiante;
}());
function example(person) {
    return "hola, " + person.Nombre + " " + person.Apellido;
}
var user = new Estudiante("JORGE ARMANDO", "OCHOA VAZQUEZ");
//let user = {nombre: "jorge ochoa", apellido: "vazquez"}
document.body.innerHTML = example(user);
