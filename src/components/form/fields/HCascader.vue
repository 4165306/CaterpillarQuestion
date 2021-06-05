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
    <a-cascader :options="config.options" :placeholder="config.placeholder" @change="onChange" />
  </a-form-item>
</div>
</template>

<script>
import fieldsMixin from '../config/fieldsMixin'
export default {
  name: 'HCascader',
  mixins: [fieldsMixin],
  methods: {
    onChange () {

    }
  }
}
</script>

<style scoped>

</style>
