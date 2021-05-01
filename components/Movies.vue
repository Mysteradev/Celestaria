<template>
  <section>
    <b-row v-if="$fetchState.pending" class="pt-5">
      <MovieLoading v-for="x in 12" :key="x" />
    </b-row>
    <div v-else>
      <b-row class="pt-5 smooth">
        <Movie v-for="movie in movies" :key="movie.id" :movie="movie" class="col-12 col-lg-3 col-md-12" />
      </b-row>
      <div class="mt-3">
        <b-pagination-nav
          v-model="currentPage"
          use-router
          pills
          :prefetch="true"
          base-url="/films/"
          :number-of-pages="pageNumber"
          align="center"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Movie from './Movie'
import MovieLoading from './MovieLoading'

export default {
  name: 'Movies',
  components: {
    MovieLoading,
    Movie
  },
  props: {
    limit: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      movies: []
    }
  },
  async fetch () {
    await this.$axios.$get(
      `${process.env.apiUrl}/movies/all?limit=${this.limit}&offset=${this.offset}`
    ).then((data) => {
      this.movies = data[0]
      if (this.$store.state.FilmsListing.moviesNumber === undefined) {
        this.setMoviesNumber(data[1])
      }
    }).catch((e) => {
      // @TODO Display a toast
    })
  },
  computed: {
    pageNumber () {
      return Math.ceil(this.$store.state.FilmsListing.moviesNumber / this.limit)
    },
    currentPage: {
      get () {
        return this.$store.state.FilmsListing.currentPage
      },

      set (value) {
        this.setCurrentPage(value || 1)
      }
    },
    offset () {
      return this.limit * (this.currentPage - 1)
    }
  },
  watch: {
    '$route.params.page': {
      handler (to) {
        this.setCurrentPage(to)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapMutations({
      setCurrentPage: 'FilmsListing/setCurrentPage',
      setMoviesNumber: 'FilmsListing/setMoviesNumber'
    })
  }
}
</script>

<style scoped>
.smooth {
  animation: .3s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
