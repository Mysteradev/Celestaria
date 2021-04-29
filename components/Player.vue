<template>
  <vue-core-video-player :src="sources" />
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
      sources: [
        {
          src: 'https://storage.coverr.co/videos/gt8XfpzJmsVGwQT25V1b5K7MnrZFkav01?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE5NjU3MDMwfQ.3adX77blhqsQNHBPScTnjgKYXi3GglhhDZiVxS-2dW4'
        },
        {
          src: 'https://storage.coverr.co/videos/fPFQVbhdEMhznoPNdlAa2KbUefZqZiPP?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE5NjU4MDcwfQ.Btr3qP8GnCL1NfJlMvz0V3WuzlnqQFB6AVPFLylWJs8'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
