<template>
  <div>
    <a-form-item
      :label="config.label"
      :colon="true"
      :rules="config.rules"
      :prop="config.prop"
      :labelCol="{span: 24}"
      :required="config.required"
    >
      <a-input v-model="value" size="large" :placeholder="config.placeholder" />
    </a-form-item>
  </div>
</template>

<script>

import mixin from '../config/fieldsMixin'

export default {
  name: '',
  mixins: [mixin]
}
</script>

<style scoped>

</style>
