<template>
  <b-container>
    <b-row v-if="$fetchState.pending">
      Chargement
    </b-row>
    <movie-container />
  </b-container>
</template>

<script>
export default {
  name: 'Aleatoire',
  data () {
    return {
      chapters: {}
    }
  },
  async fetch () {
    await this.$axios.$get(`${process.env.apiUrl}/chapters/random`)
      .then((data) => {
        this.chapters = data
      })
  }
}
</script>

<style scoped>

</style>
