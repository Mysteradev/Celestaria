<template>
  <b-col cols="12" lg="3" md="12">
    <b-card no-body img-top class="mb-2">
      <b-skeleton-img card-img="top" class="rounded-border" />

      <template #footer>
        <b-row>
          <b-col>
            <b-skeleton width="40%" class="mt-2" />
          </b-col>
        </b-row>
      </template>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'MovieLoading'
}
</script>

<style scoped>
.card {
  max-height: 235px;
  border-radius: 10px;
  overflow: hidden;
}
.card-img-top {
  min-height: 170px;
}

.card-footer {
  min-height: 58px;
}
</style>
