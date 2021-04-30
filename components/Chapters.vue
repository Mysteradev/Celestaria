<template>
  <section>
    <div v-if="chapterCount <= 4">
      <b-row v-if="$fetchState.pending">
        <ChapterLoading v-for="x in 12" :key="x" :loading="$fetchState.pending" />
      </b-row>
      <p v-if="$fetchState.error">
        Une erreur est survenue !
        <b-button @click="$fetch">
          Réessayer !
        </b-button>
      </p>
      <div v-else>
        <b-row>
          <Chapter v-for="chapter in chapterMovies" :key="chapter.id" :chapter="chapter" />
        </b-row>

        <b-button @click="$store.dispatch('CreerFilm/validateChapter'); scrollToTop">
          Valider
        </b-button>
      </div>
    </div>
    <div v-else>
      <CreateMovie />
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import CreateMovie from './CreateMovie'
import Chapter from './Chapter'
import ChapterLoading from './ChapterLoading'

export default {
  name: 'Chapters',
  components: {
    CreateMovie,
    Chapter,
    ChapterLoading
  },
  async fetch () {
    this.clearChapterMovies()
    await this.$axios.$get(
      'https://6088434aa6f4a300174261b4.mockapi.io/chapter'
    ).then((data) => {
      this.setChapterMovies(data)
    })
  },
  computed: {
    chapterCount () {
      return this.$store.state.CreerFilm.chapterCount
    },
    chapterMovies () {
      return this.$store.state.CreerFilm.chapterMovies
    }
  },
  watch: {
    chapterCount () {
      this.$fetch()
    }
  },
  methods: {
    ...mapMutations({
      setChapterMovies: 'CreerFilm/setChapterMovies',
      clearChapterMovies: 'CreerFilm/clearChapterMovies'
    }),
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>

</style>
