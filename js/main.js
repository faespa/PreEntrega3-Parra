/*****************VARIABLES ***************************************/
const ArrayPersonas = [0];


/*****************OBJETO PERSONA**************************************/
class Persona {
    constructor(nombre, apellido, edad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.id = ArrayPersonas.length;
    }
}

/***************** FORM **************************************/
const formPersona = document.getElementById("formLogin");

formPersona.addEventListener("submit", (e)=> {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;

    const persona = new Persona(nombre, apellido, edad, email);
    ArrayPersonas.push(persona);

    //convert  to JSON and add data to localStorage
    localStorage.setItem("data", JSON.stringify(persona));
    localStorage.setItem("arrayData", JSON.stringify(ArrayPersonas));

    // formPersona.reset();

    //Redicrection to mainpage
    window.location.href = '../sections/runningCal.html';
})