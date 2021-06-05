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
        <a-form-model-item label="是否垂直排列">
          <a-switch v-model="selfConf.isVertical" />
        </a-form-model-item>
        <a-form-model-item label="选项添加">
          <div class="h-flex" v-for="(item, index) in selfConf.options" :key="index">
            <div class="h-flex-1">
              选项
            </div>
            <div class="h-flex-3">
              <a-input v-model="item.value" placeholder="请输入选项" />
            </div>
            <div class="h-flex-1">
              <a-icon type="close-circle" @click="selfConf.options.splice(index, 1)" />
            </div>
          </div>
          <div
            class="h-flex"
            style="color: #2979ff;cursor: pointer"
            @click="selfConf.options.push({value: ''})"
          >
            <div>
              <a-icon type="plus-circle" />
            </div>
            <div>
              添加选项
            </div>
          </div>
        </a-form-model-item>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ruleMixin from '@/components/form/config/ruleMixin'
export default {
  name: 'HRadio',
  mixins: [ruleMixin]
}
</script>

<style scoped>

</style>
