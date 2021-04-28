<template>
  <b-container>
    <h1>Consulter les films</h1>
    <Movies :limit="12" :page="$route.params.page || 1" />
  </b-container>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style scoped>

</style>
