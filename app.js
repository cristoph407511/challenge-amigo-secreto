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

//Funcion para mostrar los amigos de la lista en la pantalla.
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

//Funcion para sortear un amigo de la lista. Ademas de validar que haya amigos en la lista para sortear.
function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay amigos para sortear");
        return;//Para que no se ejecute el codigo de abajo, si no hay amigos en la lista.
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}