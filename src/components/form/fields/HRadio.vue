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
    <a-radio-group name="radioGroup" v-model="value">
      <a-radio
        v-for="(item, index) in config.options"
        :key="index"
        :value="item.value"
        :style="config.isVertical ? 'display: block;height:30px;lineHeight:30px;' : '' "
      >
        {{item.value}}
      </a-radio>
    </a-radio-group>
  </a-form-item>
</div>
</template>

<script>
import fieldsMixin from '@/components/form/config/fieldsMixin'
export default {
  name: 'HRadio',
  mixins: [fieldsMixin]
}
</script>

<style scoped lang="scss">
.ant-form-item-control {
  .ant-form-item-children {
    display:block
  }
}
</style>
