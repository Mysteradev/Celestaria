<template>
  <b-row class="pt-5">
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" class="col-12 col-lg-3 col-md-12" />
  </b-row>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'Movies',
  components: {
    Movie
  },
  props: {
    limit: {
      type: Number,
      default: 3
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      movies: []
    }
  },
  async fetch () {
    await this.$axios.$get(
      `${process.env.apiUrl}/movies/all`
    ).then((data) => {
      this.movies = data[0]
    }).catch((e) => {

    })
  }
}
</script>

<style scoped>

</style>
