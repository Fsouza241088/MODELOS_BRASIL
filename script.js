
// Lista de modelos
const modelos = [
  {name:"KTM_DUKE 3D", img:"assets/ktm_duke.jpeg", glb:"glb/ktm_duke.glb", desc:"moto", size:"~25 MB", formats:"FBX, OBJ, GLB"},
  {name:"Farda PM-SP", img:"assets/farda_pm.png", glb:"glb/farda_pm.glb", desc:"Uniforme policial otimizado", size:"~15 MB", formats:"FBX, OBJ, PNG"},
  {name:"Barraco de Favela", img:"assets/barraco.png", glb:"glb/barraco.glb", desc:"Conjunto modular de favela", size:"~80 MB", formats:"FBX, GLB, OBJ"},
  {name:"Camisa de Time", img:"assets/camisa.png", glb:"glb/camisa.glb", desc:"Textura 4K para roupas", size:"~10 MB", formats:"PNG, PSD, TGA"},
  {name:"Kombi Brasileira", img:"assets/kombi.png", glb:"glb/kombi.glb", desc:"Kombi estilizada para jogos", size:"~8 MB", formats:"FBX, OBJ"},
  {name:"Motocicleta Titan", img:"assets/moto.png", glb:"glb/moto.glb", desc:"Motocicleta brasileira", size:"~20 MB", formats:"FBX, OBJ, GLB"}
];

// Gera os cards automaticamente
function gerarCatalogo(){
  const container=document.querySelector(".catalog .grid");
  modelos.forEach(m=>{
    const card=document.createElement("article");
    card.className="card";
    card.innerHTML=`
      <div class="thumb"><img src="${m.img}" alt="${m.name}"></div>
      <h4>${m.name}</h4>
      <p class="desc">${m.desc}</p>
      <ul class="meta"><li>Tamanho: ${m.size}</li><li>Formatos: ${m.formats}</li></ul>
      <div class="actions">
        <a class="btn" href="mailto:fabricio.souza2088@gmail.com?subject=Compra - ${encodeURIComponent(m.name)}">Comprar</a>
        <a class="btn ghost" href="#" onclick="previewAsset('${m.glb}');return false;">Visualizar</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function previewAsset(glbFile){
  alert("Preview 3D: " + glbFile + "\n(Substitua o placeholder pelo modelo real quando tiver o arquivo .glb)");
}

function openMail(e){
  e.preventDefault();
  const nome=document.getElementById("nome").value;
  const mensagem=document.getElementById("mensagem").value;
  window.location.href=`mailto:fabricio.souza2088@gmail.com?subject=Contato - ${encodeURIComponent(nome)}&body=${encodeURIComponent(mensagem)}`;
}

window.onload=gerarCatalogo;
