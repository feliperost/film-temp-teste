<template>
  <div class="tempo">

      <div>
        <InfosTempo/>
      </div>

  </div>
</template>

<script>
import InfosTempo from '@/components/InfosTempo.vue'

export default {
  name: 'TempoView',
  components: {
    InfosTempo,
  },
  created() {
    document.body.style.backgroundColor = "#f3fff0";
  },
}
</script>

<style scoped>

</style>
