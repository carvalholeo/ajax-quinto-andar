const h1 = document.querySelector('h1');

function disparaAlerta() {
    alert('CLICOU NO H1')
}

// h1.onclick = disparaAlerta;

// h1.onclick = function() {
//     alert('clicado com sucesso')
// };

// h1.onclick = () => {
//     alert('isso foi da arrow function')
// }


h1.addEventListener('click', disparaAlerta);

h1.addEventListener('click', function() {
    alert('clicado com sucesso no anônimo')
});

h1.addEventListener('click', () => {
    alert('arrow function dentro do eventListener')
})