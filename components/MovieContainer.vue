<template>
  <b-row>
    <b-col col sm="9" class="movie-section pb-sm-5">
      <Player />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto cumque fugit impedit, nobis sed.
    </b-col>
    <b-col>
      <RecommendedList />
    </b-col>
  </b-row>
</template>

<script>
import RecommendedList from './RecommendedList'
import Player from './Player'
export default {
  name: 'MovieContainer',
  components: { Player, RecommendedList }
}
</script>

<style scoped>
.movie-section {
  max-height: 70%;
}
</style>
