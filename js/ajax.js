'use strict';

const idPais = document.querySelector('#id-pais');

const nome = document.querySelector('#nome');
const sigla = document.querySelector('#sigla');
const capital = document.querySelector('#capital');
const regiao = document.querySelector('#regiao');
const ddi = document.querySelector('#ddi');

idPais.addEventListener('change', event => {
  const nomePais = event.target.value;
  fetch('https://restcountries.eu/rest/v2/name/' + nomePais)
    .then(response => response.json())
    .then(response => {
      const resposta = response[0];

      nome.innerText = resposta.nativeName;
      sigla.innerText = resposta.alpha2Code;
      capital.innerText = resposta.capital;
      regiao.innerText = resposta.region;
      ddi.innerText = '+' + resposta.callingCodes[0];
    })
    .catch(error => {
      console.trace(error);
      alert('Hmm, parece que nós não conseguimos mostrar esse país. Ele existe?')
    })
});
