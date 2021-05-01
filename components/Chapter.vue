<template>
  <b-col col lg="4" md="6" cols="12" class="pb-3">
    <b-card
      :title="chapter.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      :img-height="170"
      tag="article"
      style=""
      class="mb-2"
      :border-variant="getActiveVideo === chapter.id ? 'primary' : ''"
      @click="setActiveVideo(chapter.id)"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button variant="primary" @click="openModal(chapter.id)">
        Voir la vidéo
      </b-button>
    </b-card>

    <b-modal
      ref="movieModal"
      size="xl"
      centered
      :hide-header="true"
      :hide-footer="true"
    >
      <vue-core-video-player src="https://storage.coverr.co/videos/gt8XfpzJmsVGwQT25V1b5K7MnrZFkav01?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE5NjU3MDMwfQ.3adX77blhqsQNHBPScTnjgKYXi3GglhhDZiVxS-2dW4" />
    </b-modal>
  </b-col>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Chapter',
  props: {
    chapter: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getActiveVideo () {
      return this.$store.state.CreerFilm.activeVideo
    }
  },
  methods: {
    ...mapMutations({
      setActiveVideo: 'CreerFilm/setActiveVideo'
    }),
    openModal (id) {
      this.$refs.movieModal.show()
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    cursor: pointer;
    transition: .3s;

    box-shadow: 0 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);

    &:hover {
      transform: translateY(-10px);
    }
  }

  .modal-body-custom {
    padding: 0 !important;
  }
</style>
