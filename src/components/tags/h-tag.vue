<template>
<div
  class="h-flex h-padding-5 h-margin-5"
  style="background: #f2f3f6;border-radius: 10px;font-weight: bold;cursor: pointer"
>
  <div v-if="direction === 'left'">
    <a-icon :type="icon" />
  </div>
  <div class="h-margin-left-right-2">
    {{text}}
  </div>
  <div v-if="direction === 'right'">
    <a-icon :type="icon" />
  </div>
</div>
</template>

<script>
export default {
  name: 'h-tag',
  props: {
    text: {
      type: String,
      default: () => ''
    },
    icon: {
      type: String,
      default: () => ''
    },
    direction: {
      type: String,
      default: () => 'right'
    }
  }
}
</script>

<style scoped>

</style>
