<template>
  <NuxtLink :to="link">
    <b-button :class="type">
      <span>{{ text }}</span> <slot name="icon" />
    </b-button>
  </NuxtLink>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'solid'
    },
    icon: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 10px;

  &.solid {
    background: #101010;
  }

  &.empty {
    background: transparent;
    border: 1px solid #101010;
    color: #101010;
  }
}
</style>
