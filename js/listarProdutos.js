const xhr = new XMLHttpRequest();

const divRaiz = document.querySelector('div#root');

const containerPai = document.createElement('div');
const divProduto = document.createElement('div');

xhr.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 4 && event.target.status === 200) {
    const arrayProdutos = JSON.parse(xhr.response);

    const arrayConvertido = arrayProdutos.items;
    console.log(arrayConvertido)

    arrayConvertido.forEach(produtoRaiz => {
      const produto = produtoRaiz.product;

      const nomeProduto = document.createElement('p');
      const imagemProduto = document.createElement('img');
      const divPreco = document.createElement('div');
      const preco = document.createElement('p');
      const parcelas = document.createElement('p');
      const valorPorParcela = document.createElement('p');

      divProduto.setAttribute('id', produto.id);

      nomeProduto.innerText = produto.name;
      imagemProduto.setAttribute('src', produto.images[0]);
      imagemProduto.setAttribute('alt', produto.name);
      imagemProduto.addEventListener('error', (event) => {
        event.target.setAttribute('src', 'https://source.unsplash.com/random');
      })

      const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.price.value);
      const parcelaFormatada = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.price.installmentValue);
      preco.innerText = `Valor: ${precoFormatado}`;
      parcelas.innerText = `Até ${produto.price.installments}x no cartão de crédito`;
      valorPorParcela.innerText = `Valor da parcela: ${parcelaFormatada}`;

      divPreco.appendChild(preco);
      divPreco.appendChild(parcelas);
      divPreco.appendChild(valorPorParcela);

      divProduto.appendChild(nomeProduto);
      divProduto.appendChild(imagemProduto);
      divProduto.appendChild(divPreco);

      containerPai.appendChild(divProduto);
    });

    divRaiz.appendChild(containerPai);
  }
});
xhr.open('GET', 'js/data.json');
xhr.send();

// fetch('https://raw.githubusercontent.com/buscape-company/exercicios/master/frontend/resources/data.json')
//   .then(res => res.json())
//   .then(res => console.log(res))