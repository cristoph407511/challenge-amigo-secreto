//Declaracion del array de amigos
let amigo =[];

//Funcion para agregar amigos al array. Ademas de validar que no se ingrese un campo vacio.
function agregarAmigo(){
    let entradaAmigo = document.getElementById("amigo");
    let nombreAmigo = entradaAmigo.value;
    
    if(!nombreAmigo){
        alert("Debe ingresar un nombre");
        return; //Para que no se ejecute el codigo de abajo, si no se han agregado amigos.
    }
    amigo.push(nombreAmigo);
    entradaAmigo.value = "";
    entradaAmigo.focus();
    renderizarAmigos();
};