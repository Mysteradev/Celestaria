<template>
  <b-row>
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
      `https://picsum.photos/v2/list?limit=${this.limit}&page=${this.page}`
    ).then((data) => {
      this.movies = data
    })
  }
}
</script>

<style scoped>

</style>
