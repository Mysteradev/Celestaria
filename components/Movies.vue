<template>
  <b-row class="pt-5">
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </b-row>
</template>

<script>
export default {
  name: 'Movies',
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
