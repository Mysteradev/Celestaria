<template>
  <img src="@/assets/family.svg" alt="Image montrant une famille en recherche" class="enter-animation img-fluid">
</template>

<script>
export default {}
</script>

<style>
.enter-animation {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
