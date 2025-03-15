// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  if (nombre !== "") {
    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = ""; // Limpiar el campo de texto
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

function actualizarListaAmigos() {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = ""; // Limpiar la lista

  amigos.forEach(amigo => {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = amigo;
    listaAmigosElement.appendChild(nuevoLi);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Necesitas al menos dos amigos para el sorteo.");
    return;
  }

  const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = ""; // Limpiar el resultado anterior

  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = `Tu amigo secreto es: ${amigoAleatorio}`;
  resultadoElement.appendChild(nuevoLi);
}