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
        <a-form-model-item label="选项添加">
          <div class="full-width" style="max-height: 600px; overflow: auto">
           <tree
             :tree-data="selfConf.options"
             :children-name="childrenName"
             :label-name="labelName"
             @onNodeChange="onNodeUpdate"
           />
          </div>
        </a-form-model-item>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import ruleMixin from '../config/ruleMixin'
import tree from '@/components/tree/tree'
export default {
  name: 'HCasader',
  mixins: [ruleMixin],
  components: { tree },
  data () {
    return {
      visible: false,
      parentNodeName: '',
      node: null,
      labelName: 'value',
      childrenName: 'child'
    }
  },
  methods: {
    onNodeUpdate (options) {
      this.selfConf.options = options
    }
  }
}
</script>

<style scoped>
/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {

  border-radius: 10px;

  background-color: rgba(0,0,0,0.1);

}

/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb

{

  border-radius: 10px;

  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);

  background-color: rgba(0,0,0,0.1);

}

</style>
