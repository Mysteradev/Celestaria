<template>
  <b-container class="pt-5">
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
