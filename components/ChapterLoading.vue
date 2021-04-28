<template>
  <b-col col lg="4" md="6" cols="12" class="pb-3">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card no-body img-top>
          <b-skeleton-img card-img="top" class="pb-2" />
          <b-card-text class="pl-4 pt-4">
            <b-skeleton width="35%" type="button" />
          </b-card-text>

          <b-card-text class="pl-4 pr-4 pb-2">
            <b-skeleton width="100%" />
            <b-skeleton width="80%" />
            <b-skeleton width="85%" />
          </b-card-text>
        </b-card>
      </template>
    </b-skeleton-wrapper>
  </b-col>
</template>

<script>
export default {
  name: 'ChapterLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
