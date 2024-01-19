const key = "a371571b9ab807ac095e627cfa70af21"

function adicionarDados(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
        
        if (!resposta.ok) {
            throw new Error(`Não foi possível obter informações de clima para a cidade ${cidade}`);
        }

        const dados = await resposta.json();
        adicionarDados(dados);
    } catch (erro) {
        console.error('Erro na busca do clima:', erro);
        alert('Erro na busca do clima. Por favor, tente novamente.');
    }
}

function clickbotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
