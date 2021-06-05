<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="组件属性" >
        <a-form-model-item label="标题">
          <a-input placeholder="请输入列表标题" v-model="selfConf.label" />
        </a-form-model-item>
        <a-form-model-item label="提示语">
          <a-input placeholder="请输入提示文字" v-model="selfConf.placeholder" />
        </a-form-model-item>
        <a-form-model-item label="是否必填">
          <a-switch v-model="selfConf.required" />
        </a-form-model-item>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ruleMixin from '../config/ruleMixin'
export default {
  name: 'HTextarea',
  mixins: [ruleMixin]
}
</script>

<style scoped>

</style>
