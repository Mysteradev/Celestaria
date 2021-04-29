<template>
  <b-col col lg="3" md="6" cols="12" class="pb-3">
    <NuxtLink :to="`/film/${movie.slug}`">
      <b-card
        :title="movie.title"
        :img-src="movie.thumbnailUrl"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      />
    </NuxtLink>
  </b-col>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
