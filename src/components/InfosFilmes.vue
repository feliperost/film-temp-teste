<template>

    <div class="conteudo-cine">
      <h3>Pesquise um filme</h3>
        <input type="text" v-model="buscaFilme" @keypress.enter="puxarDadosFilme" placeholder="Buscar filme...">
        <button @click="puxarDadosFilme" class="btn-padrao">Buscar</button>

        <div v-if="dadosFilme" class="lista-filmes">
          <ul v-for="filme in dadosFilme.Search" :key="filme">
            <a :href="'https://www.imdb.com/title/' + filme.imdbID" class="poster-filme"><img :src="filme.Poster" alt="cartaz do filme" v-if="filme.Poster"></a>
            <li><a :href="'https://www.imdb.com/title/' + filme.imdbID">{{filme.Title}} ({{filme.Year}})</a></li>
          </ul>
        </div>
        <div v-else>
          <h3>Busca sem resultados. Tente outro termo.</h3>
        </div>

    </div>

</template>


<script>
export default {
  name: 'InfosCine',
  data() {
    return {
      dadosFilme: {},
      buscaFilme: "",
    }
  },
  methods: {
    async puxarDadosFilme() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.VUE_APP_API_KEY_IMDB,
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
      let response = await fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${this.buscaFilme}&r=json&page=1`, options);
      let json = await response.json();
      this.dadosFilme = await json;
    }
  }
}
</script>


<style scoped>
.lista-filmes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-left: 350px;
  margin-right: 350px;
}

.lista-filmes li {
  font-size: 1.1rem;
  list-style: none;
}

.poster-filme img {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 7px;
  border-radius: 2px;
  background: #fff;
  max-height: 400px;
  transition: all 0.3s;
}

.poster-filme img:hover {
  transform: scale(1.025);
}
</style>
