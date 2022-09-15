<template>
  <div class="app">
      <router-link to="/filmes">Filmes</router-link> |
      <router-link to="/tempo">Tempo</router-link>
    <transition mode="out-in">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'App',
  components: {
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-top: 50px;
  height: 100%;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0px;
  width: 100%;
  transition: all 0.5s ease-out
}

div {
  padding: 10px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

div a.router-link-exact-active {
  color: #42b983;
}

.v-enter-from, 
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.btn-padrao {
  border: none;
  background: #42b983;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}


h3 {
  font-size: 1.5rem;
}

input {
  width: 200px;
  height: 20px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid;
}

</style>