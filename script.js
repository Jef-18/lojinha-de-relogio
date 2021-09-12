const itens = [
  
  {
    id: 0,
    nome: 'Relógio Prata',
    img: 'imagens/relogio_2.jpg',
    quant: 0
  },

  {
    id: 1,
    nome: 'Relógio Azul',
    img: 'imagens/relogio_1.jpg',
    quant: 0
  },

  {
    id: 2,
    nome: 'Relógio Dourado',
    img: 'imagens/relogio_3.jpg',
    quant: 0
  },

]

function inicializarLoja() {

  var containerProdutos = document.getElementById('produtos');
  itens.map((val) => {
    console.log(val.nome);

    containerProdutos.innerHTML += `
          
      <div class = "produto_single">
      <img src = "`+val.img+`"/>
      <p>`+ val.nome +`</p>
      <a key = "`+ val.id +`" href = "#"> Adicionar ao carrinho!</a>
      </div>
            
    `;

  })

}

inicializarLoja();

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById('carrinho');

  containerCarrinho.innerHTML = "";
  itens.map((val) => {
    if(val.quant > 0) {
      containerCarrinho.innerHTML += `

        <div class = "info_single_checkout">
          <p style = "float: left;"> Produto: `+ val.nome +`</p>
          <p style = "float: right;"> Quantidade: `+ val.quant +`</p>
          <div style = "clear: both"></div>
        </div>

      `;
    }

  })

}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let key = this.getAttribute('key');
    itens[key].quant++;
    atualizarCarrinho();
    return false;
  })
}
