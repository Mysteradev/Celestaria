<template>
  <div>
    <p v-if="$fetchState.pending">
      Récupération des données...
    </p>
    <p v-if="$fetchState.error">
      Une erreur est survenue !
    </p>
    <div v-else>
      <b-row>
        <Chapter v-for="chapter in chapterMovies" :key="chapter.id" :chapter="chapter" />
      </b-row>

      <b-button @click="$store.dispatch('CreerFilm/validateChapter')">
        Valider
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Chapters',
  async fetch () {
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
      console.log('fetched new data')
    }
  },
  methods: {
    ...mapMutations({
      setChapterMovies: 'CreerFilm/setChapterMovies'
    })
  }
}
</script>

<style scoped>

</style>
