<template>
  <section>
    <h3>Récapitulatif</h3>
    <b-row>
      <Chapter v-for="chapter in getSelectedChapters" :key="chapter.id" :chapter="chapter" />
    </b-row>

    <b-form @submit="onSubmit">
      <b-form-group
        id="main-form"
        label="Titre de mon film :"
        label-for="main-form"
        description="Le titre permettra d'identifier facilement votre film !"
      >
        <b-form-input
          id="movie-title"
          v-model="form.title"
          type="text"
          placeholder="Mon film composé de chapitres !"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="form.checked" :value="true">
          J'accepte les termes et les conditions d'utilisations du site.
        </b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary">
        Envoyer !
      </b-button>
    </b-form>
  </section>
</template>

<script>
export default {
  name: 'CreateMovie',
  data () {
    return {
      form: {
        title: '',
        checked: false
      }
    }
  },
  computed: {
    getSelectedChapters () {
      return this.$store.state.CreerFilm.selectedMovies
    },

    idChapters () {
      return this.getSelectedChapters.map(movie => movie.id)
    }
  },
  methods: {
    openToast (variant = null) {
      this.$bvToast.toast('Erreur lors de l\'enregistrement de votre film, veuillez réessayer.', {
        title: 'Erreur !',
        variant,
        solid: true
      })
    },
    onSubmit (e) {
      e.preventDefault()
      alert(JSON.stringify(this.idChapters))
      this.$axios.$post(`${process.env.apiUrl}/movies`, {
        title: this.form.title,
        chapters: JSON.stringify(this.idChapters),
        thumbnailUrl: 'https://picsum.photos/id/10/2500/1667',
        movieSlug: this.form.title
      })
        .then(() => {
          this.$router.push('/films')
        })
        .catch(() => {
          this.openToast('danger')
        })
    }
  }
}
</script>

<style scoped>

</style>
