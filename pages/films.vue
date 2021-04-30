<template>
  <b-container class="pt-5">
    <Movies limit="12" />
  </b-container>
</template>

<script>
import Movies from '../components/Movies'
export default {
  name: 'Films',
  components: { Movies }
}
</script>

<style scoped>

</style>
