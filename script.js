// Dados fictícios para os modelos
const modelos = [
  {
    nome: "Casa Colonial",
    descricao: "Modelo low-poly com texturas PBR.",
    imagem: "casa-colonial.jpg",
    preco: "R$ 49,90"
  },
  {
    nome: "Barraca de Feira",
    descricao: "Ideal para cenas urbanas brasileiras.",
    imagem: "barraca-feira.jpg",
    preco: "R$ 29,90"
  },
  {
    nome: "Ônibus Urbano",
    descricao: "Compatível com Unreal e Unity.",
    imagem: "onibus-urbano.jpg",
    preco: "R$ 79,90"
  }
];

// Gera os cards no catálogo
const grid = document.querySelector(".grid");
modelos.forEach(modelo => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${modelo.imagem}" alt="${modelo.nome}">
    <h4>${modelo.nome}</h4>
    <p>${modelo.descricao}</p>
    <p><strong>${modelo.preco}</strong></p>
    <a href="mailto:fabricio.souza2088@gmail.com?subject=Compra: ${modelo.nome}" class="buy-button">Comprar</a>
  `;
  grid.appendChild(card);
});

// Função para abrir e-mail com nome e mensagem
function openMail(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const mailto = `mailto:fabricio.souza2088@gmail.com?subject=Contato de ${nome}&body=${encodeURIComponent(mensagem)}`;
  window.location.href = mailto;
}