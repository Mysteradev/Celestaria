<template>
  <b-container class="pt-5">
    <h1>Créer un nouveau film</h1>
    <p>Consultez les différentes vidéos pour la partie 1 de votre film et faites votre choix !</p>
    <Chapters />
  </b-container>
</template>

<script>
import Chapters from '../components/Chapters'

export default {
  name: 'CreerFilm',
  components: {
    Chapters
  }
}
</script>

<style scoped>

</style>
