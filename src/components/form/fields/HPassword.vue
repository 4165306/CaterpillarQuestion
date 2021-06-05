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
    <a-input-password v-model="value" :placeholder="config.placeholder" />
  </a-form-item>
</div>
</template>

<script>
import fieldsMixin from '../config/fieldsMixin'
export default {
  name: 'HPassword',
  mixins: [fieldsMixin]
}
</script>

<style scoped>

</style>
