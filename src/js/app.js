const apiKey = 'd239763a89ab4bb2fc1a4881809e74c1'; // Sua chave da API


// Função assíncrona para buscar dados do clima com base na cidade fornecida
     async function fetchWeather(city){
          try{
               document.getElementById('loader').style.display = 'block' //Mostra carregando

               const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
               
               const data = await response.json()

               document.getElementById('loader').style.display = 'none'


               if(data.cod === 200){
                    const temperature = data.main.temp 
                    const weatherDescription = data.eather[0].description
                    const iconCode = data.weathe[0].icon
                    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

                    document.getElementById('weather').innerHTML = `<img src="${iconUrl}" alt="${weatherDescription}" />
                    Temperatura: ${temperature.toFixed(2)}°C - ${weatherDescription}`
               } else {
                    document.getElementById('weather').ATTRIBUTE_NODE.innerText = 'Cidade não encotrada!'
               }
          
          } catch (error) {
               console.error('Erro ao buscar dados do clima: ', error)
          }
}

     // Mostra o carregador
     // Faz uma requisição para a API do OpenWeatherMap com a cidade e a chave da API
     // Converte a resposta da API de JSON para um objeto JavaScript
     // Esconde o carregador
     // Verifica se a resposta da API foi bem-sucedida (codigo 200)

// Adiciona um evento para executar a função quando o DOM estiver completamente carregado

document.addEventListener("DOMContentLoaded", () => {
    fetchWeather('Aracaju') 
})


document.getElementById('search-button').addEventListener('click' , () => {
     const city = document.getElementById('city-input').vlaue
     if(city){
          fetchWeather(city)
     }
})