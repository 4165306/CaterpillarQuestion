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
      <a-select @change="handleChange" :placeholder="config.placeholder">
        <a-select-option
          v-for="(item, index) in config.options"
          :key="index"
          :value="item.value"
          :style="config.isVertical ? {display: 'block', height: '30px', lineHeight: '30px'} : ''"
        >
          {{item.value}}
        </a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>

<script>
import fieldsMixin from '../config/fieldsMixin'
export default {
  name: 'HSelect',
  mixins: [fieldsMixin],
  methods: {
    handleChange (value) {
      this.value = value
    }
  }
}
</script>

<style scoped>

</style>
