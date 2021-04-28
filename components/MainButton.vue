<template>
  <NuxtLink :to="link">
    <b-button :class="type">
      <span class="pr-3">{{ text }}</span> <slot name="icon" />
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 32px;

  min-width: 154px;
  min-height: 48px;
  border-radius: 10px;

  &.solid {
    background: #000000;
  }

  &.empty {
    background: transparent;
    border: 1px solid black;
    color: black;
  }
}
</style>
