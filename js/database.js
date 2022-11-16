// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "../img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "../img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "../img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "../img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "../img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "../img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];
 
let body = document.querySelector("body")

let header = document.createElement("header")
body.appendChild(header)

let h1 = document.createComment('h1')
h1.innerHTML = 'Weartake'
header.appendChild(h1)


function renderLista(lista){
  for(let i = 0; i < lista.length; i++){
    let liProdutos = document.createElement("li")
    liProdutos.classList.add('data')

    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let button = document.createElement('button');

    liProdutos.appendChild(img)
    liProdutos.appendChild(h3)
    liProdutos.appendChild(h2)
    liProdutos.appendChild(p)
    liProdutos.appendChild(span)
    liProdutos.appendChild(button);

    }
}

renderLista(data)





let section = document.createElement('section')
main.appendChild(section)





