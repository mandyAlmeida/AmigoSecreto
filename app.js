let nomesSecretos = [];

function adicionarAmigo(nomes) {
  const nomeInput = document.getElementById("amigo").value;
  document.getElementById("amigo").value = "";

  if (!nomeInput) {
    alert("Por favor, insira um nome valido");
    return;
  }

  if (nomesSecretos.includes(nomeInput)) {
    alert("Nome já existe na lista.");
    return;
  }

  nomesSecretos.push(nomeInput);
  console.log(`${nomeInput} foi adicionado à lista de amigos.`);

  mostrarListaDeAmigos();
}
function mostrarListaDeAmigos() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";
  console.log("Lista de Amigos:", nomesSecretos);

  if (nomesSecretos.length === 0) {
    listaElement.innerHTML = "<li>A lista está vazia.</li>";
    return;
  }
  nomesSecretos.forEach((nomes, index) => {
    console.log(`Adicionando: ${index + 1}. ${nomes}`);
    const li = document.createElement("li");
    li.textContent = nomes;
    listaElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (nomesSecretos.length === 0) {
    console.log("Não há amigos na lista para sortear.");
    return;
  }
  const indiceSorteado = Math.floor(Math.random() * nomesSecretos.length);
  const amigoSorteado = nomesSecretos[indiceSorteado];
  alert(`O amigo sorteado é: ${amigoSorteado}`);
}
