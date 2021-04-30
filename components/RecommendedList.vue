<template>
  <div>
    <div v-if="$fetchState.pending">
      Chargement des données
    </div>
    <b-row v-else>
      <b-col col md="12" class="pb-3">
        <Movie v-for="movie in recommendedMovies" :key="movie.id" drop-side="drop-right" :movie="movie" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'RecommendedList',
  components: {
    Movie
  },
  data () {
    return {
      recommendedMovies: []
    }
  },
  async fetch () {
    this.recommendedMovies = await this.$axios.$get(`${process.env.apiUrl}/movies/recommended`)
  }
}
</script>

<style scoped>

</style>
