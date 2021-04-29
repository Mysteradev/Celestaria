<template>
  <b-container class="pt-5">
    <b-row v-if="$fetchState.pending">
      Chargement
    </b-row>

    <b-row class="pt-5" else>
      <h1>
        {{ movieData.title }}
      </h1>
      <movie-container />
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Slug',
  data () {
    return {
      movieData: {}
    }
  },
  async fetch () {
    await this.$axios.$get(`${process.env.apiUrl}/movies/find_slug/${this.$route.params.slug}`)
      .then((data) => {
        this.movieData = data
      })
  }
}
</script>

<style scoped>

</style>
