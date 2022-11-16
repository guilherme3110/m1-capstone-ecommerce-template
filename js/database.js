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


let removCount = 0;
 
function renderList(data){
  for(let i = 0; i < data.length; i++){
    
  }
}
renderList(data)

let secaoProduto = document.querySelector('.produtos')
  for(let i = 0; i < data.length; i++){

    liProduto = document.createElement('li')

    let img = document.createElement('img')
    img.src = data[i].img

    let h3 = document.createElement('h3')
    h3.classList.add = data[i].tag
    h3.innerHTML = data[i].tag

    let h2 = document.createElement('h2')
    h2.classList.add = data[i].nameItem
    h2.innerText = data[i].nameItem

    let p = document.createElement('p')
    p.classList.add = data[i].description
    p.innerHTML = data[i].description

    let span = document.createElement('span')
    span.classList.add = 'valor'
    span.innerText = `R$ ${data[i].value},00`

    let button = document.createElement('button')
    button.classList.add('buttonProduto')
    button.innerText = 'adicionar ao carrinho'
    button.addEventListener('click', function(e){
      addProduto(data[i])
      
    })
    
    secaoProduto.appendChild(liProduto)
    liProduto.appendChild(img)
    liProduto.appendChild(h3)
    liProduto.appendChild(h2)
    liProduto.appendChild(p)
    liProduto.appendChild(span)
    liProduto.appendChild(button)
}

 // função para remover o produto
    function addProduto(produto){
      let carrinho = document.querySelector('#carrinho')
      let frase = document.querySelector('#frase')
      let li = document.createElement('li')
      let img = document.createElement('img')
      let h2 = document.createElement('h2')
      let span = document.createElement('span')
      let button = document.createElement('button')

       if(frase != null){
         frase.remove();
       }

      li.id = produto.id;
      img.src = produto.img;
      h2.innerText = produto.nameItem;
      button.innerHTML = 'remover';
      span.innerText = `R$ ${produto.value},00`
     


      button.addEventListener('click', function(e){
        
        li.remove();
        
        
        removCount--;

      })
      li.appendChild(img)
      li.appendChild(h2)
      li.appendChild(span)
      li.appendChild(button)

       carrinho.appendChild(li)

    }

//  let newArr = [];


//  // carrinhos de compras.
//  function carrinhoCompras(){
//    for(let i = 0; i < data.length; i++){

    

//    }
//  }
 


// function buttonAdd(){
//     let button = document.querySelectorAll('.buttonProduto')
//     console.log(button)
//     for(let i = 0; i < button.length; i++){
//       button[i].addEventListener('click', function(e){console.log(e)})
//     }
// }

// buttonAdd()










