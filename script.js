const imagem = document .querySelector('img');
const imagem2 = document .querySelector('#imagem2');
const imagem3 = document .querySelector('#imagem3');
const botao = document .querySelector('button');
const nomeDoPersonagem = document .querySelector('#nome');
const nomeDoPersonagem2 = document .querySelector('#nome2');
const nomeDoPersonagem3 = document .querySelector('#nome3');
const especie = document .querySelector('#especie');
const especie2 = document .querySelector('#especie2');
const especie3 = document .querySelector('#especie3');
const condicao = document .querySelector('#status');
const condicao2 = document .querySelector('#status2');
const condicao3 = document .querySelector('#status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

pegarPersonagem2 = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
    });
}

pegarPersonagem3 = () =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
    });
}

botao.addEventListener('click',pegarPersonagem);

botao.addEventListener('click',pegarPersonagem2);

botao.addEventListener('click',pegarPersonagem3);