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
    <a-textarea v-model="value" :placeholder="config.placeholder" allowClear />
  </a-form-item>
</div>
</template>

<script>
import fieldsMixin from '../config/fieldsMixin'
export default {
  name: 'HTextarea',
  mixins: [fieldsMixin],
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
