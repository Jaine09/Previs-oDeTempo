const key = "639f302be83b9b35d9e5568d6833f6df";

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector("#cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector("#temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector("#texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector("#img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json()) //acessando o servidor, pegando a resposta do servidor e passando para json 

    /*Testando se está conectando no servidor, guardando o valor e passando para json
    consolle.log(dados)*/
    colocarDadosNaTela(dados)
}


function cliqueiNoBotao() {
    const cidade = document.querySelector("#input-cidade").value;
    
    /*Testando se está pegando a cidade digitada
     console.log(cidade);*/
    buscarCidade(cidade);
}