<template>
  <div>
        <h3>Pesquise uma localização</h3>
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Buscar cidade..." v-model="query" @keypress.enter="fetchWeather">
        <button @click="fetchWeather" class="btn-padrao">Buscar</button>
      </div>

      <transition>
        <div v-if="weather.sys" class="weather-wrap" :class="typeof weather.main !='undefined' && weather.main.temp > 17 ? 'warm' : 'cold'">

          <div class="location-box" v-if="weather.sys">
            <div class="nome-pais">{{weather.name}}, {{weather.sys.country}}</div>
          </div>

          <div class="weather-box" v-if="weather.main">
            <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
            <div class="weather">{{weather.weather[0].main}}, {{weather.weather[0].description}}</div>
            <div class="date">{{ dateBuilder() }}</div>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>


<script>
export default {
  name: 'InfosTempo',
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY_TEMP,
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    }
  },
  methods: {
    async fetchWeather(){
        let response = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`);
        let json = await response.json();
        this.weather = await json;
        localStorage.setItem('localizacao', this.query)
    },
    dateBuilder() {
      let d = new Date()
      let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
      let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

      let diaSemana = dias[d.getDay()]
      let dia = d.getDate()
      let mes = meses[d.getMonth()]
      let ano = d.getFullYear()

      return `${diaSemana}, ${dia} de ${mes} de ${ano}`
    },
  },
  mounted() {
    const localGuardado = localStorage.getItem('localizacao')
    this.query = localGuardado
    this.fetchWeather()
  } 
}

</script>


<style scoped>
.date {
  font-size: 1.1rem;
}

.warm {
  background: #fff5e8;
  -webkit-animation: bgcolorQuente 4s infinite;
  animation: bgcolorQuente 4s infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;  
}

@keyframes bgcolorQuente {
    0% {
        background-color: #fff5e8
    }
    100% {
        background-color: rgb(253, 200, 196)
    }
}

.cold {
  background: #adecff;
  -webkit-animation: bgcolorFrio 4s infinite;
  animation: bgcolorFrio 4s infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;  
}

@keyframes bgcolorFrio {
    0% {
        background-color: #adecff
    }
    100% {
        background-color: #83b5ff
    }
}

.nome-pais {
  font-size: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.temp {
  font-size: 4rem;
  margin-top: -20px;
}

.weather-wrap {
  display: inline-block;
  justify-content: center;
  border: 1px solid;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 7px;
  border-radius: 2px;
  background: #fff;
}
</style>
