const idPais = document.getElementById('id-pais');

const nome = document.getElementById('nome');
const sigla = document.getElementById('sigla');
const capital = document.getElementById('capital');
const regiao = document.getElementById('regiao');
const ddi = document.getElementById('ddi');


const mudaPais = async (event) => {
  try {
    const pais = event.target.value;

    const primeiroResultado = await fetch(`https://restcountries.eu/rest/v2/name/${pais}`);
    const [respostaPais] = await primeiroResultado.json();

    nome.innerText = respostaPais.name;
    sigla.innerText = respostaPais.alpha3Code;
    capital.innerText = respostaPais.capital;
    regiao.innerText = respostaPais.region;
    ddi.innerText = respostaPais.callingCodes[0];
  } catch (error) {
    alert('Esse país não existe!');

    nome.innerText = '';
    sigla.innerText = '';
    capital.innerText = '';
    regiao.innerText = '';
    ddi.innerText = '';
  }
}

idPais.addEventListener('change', mudaPais)
