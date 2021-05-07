<template>
  <b-container>
    <h1>Consulter les films</h1>
    <Movies :limit="12" />
  </b-container>
</template>

<script>
import Movies from '../../components/Movies'

export default {
  name: 'Page',
  components: {
    Movies
  }
}
</script>

<style scoped>

</style>
