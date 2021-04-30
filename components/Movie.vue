<template>
  <NuxtLink :to="`/film/${movie.slug}`">
    <b-card
      overlay
      :title="movie.title"
      :img-src="movie.thumbnailUrl"
      img-alt="Image de miniature du film"
      img-top
      tag="article"
      style="max-width: 20rem;"
      :class="hover ? 'card-hover' : ''"
      class="mb-2"
    >
      <template #footer>
        <b-card-text>
          <b-row class="d-flex justify-content-between">
            <b-col cols="9">
              <small class="text-muted">{{ getFormattedDate }}</small>
            </b-col>

            <b-col cols="3">
              <b-dropdown
                dropleft
                :lazy="true"
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <BIconThreeDots class="icon" />
                  <span class="sr-only">Search</span>
                </template>
                <b-dropdown-item @click="share('Facebook')">
                  <BIconFacebook class="mr-2" style="color: #4267B2;" />Partager sur Facebook
                </b-dropdown-item>
                <b-dropdown-item @click="share('Twitter')">
                  <BIconTwitter class="mr-2" style="color: #1DA1F2;" />Partager sur Twitter
                </b-dropdown-item>
                <b-dropdown-item @click="share">
                  <BIconLink class="mr-2" />Copier le lien
                </b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-card-text>
      </template>
    </b-card>
  </NuxtLink>
</template>

<script>
import { BIconThreeDots, BIconTwitter, BIconFacebook, BIconLink } from 'bootstrap-vue'

export default {
  name: 'Movie',
  components: {
    BIconThreeDots,
    BIconTwitter,
    BIconFacebook,
    BIconLink
  },
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getFormattedDate () {
      return new Date(this.movie.createdAt).toLocaleDateString('fr-fr')
    }
  },
  methods: {
    share (socialNetwork) {
      if (socialNetwork === 'Twitter') {
        window.open(`https://twitter.com/intent/tweet?text=Découvrez mon film : ${this.movie.title} &url=${process.env.url}/film/${this.movie.slug}`)
      } else if (socialNetwork === 'Facebook') {
        window.open(`https://www.facebook.com/sharer.php?href=${process.env.url}/film/${this.movie.slug}`)
      } else {
        navigator.clipboard.writeText(`${process.env.url}/film/${this.movie.slug}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  border: none;
  border-radius: 10px;
  transition: .3s;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .icon {
    padding-top: 0;
    padding-bottom: 0;
    color: #6c757d;
    vertical-align: initial;
    transition: .3s;

    &:hover {
      color: black;
    }
  }

  .card-img-overlay {
    padding-bottom: 0;
    bottom: 0;
    top: auto;
    background-image: linear-gradient(0deg, black, transparent);

    .card-title {
      color: white;
      font-size: 16px;
      font-weight: normal;
    }
  }

  .card-footer:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .card-hover {
    transform: translateY(-10px);
  }
}
</style>
