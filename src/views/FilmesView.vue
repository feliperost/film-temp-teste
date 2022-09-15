<template>
  <div class="cine">

      <div>
        <InfosFilmes/>
      </div>

  </div>
</template>

<script>
import InfosFilmes from '@/components/InfosFilmes.vue'

export default {
  name: 'FilmesView',
  components: {
    InfosFilmes,
  },
  created() {
    document.body.style.backgroundColor = "#f5f5f5";
  },
}
</script>
