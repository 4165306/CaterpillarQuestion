<template>
<div class="h-flex full-height full-width">
  <div class="h-flex-1 h-padding-10 full-height">
    <components-render @onTap="onComponentsSelected" />
  </div>
  <div class="h-flex-3 h-padding-10">
    <vuedraggable v-model="comps">
      <form-render
        v-for="(item, index) in comps"
        :key="index"
        :el="item.el"
        :idx="index"
        :config="item"
        :show-package="item.showPackage"
        @click.native="current.idx = index"
        @onRemove="(idx) => comps.splice(idx, 1)"
      />
    </vuedraggable>
  </div>
  <div class="h-flex-1 h-padding-10">
    <rules-render
      v-for="(item, index) in rules"
      :key="index"
      :el="item.el"
      :config="item"
      @onRuleChange="onRuleChange"
      v-show="index === current.idx"
    />
  </div>
</div>
</template>

<script>
import ComponentsRender from '@/components/form/componentsRender'
import FormRender from '@/components/form/formRender'
import RulesRender from '@/components/form/rulesRender'
import vuedraggable from 'vuedraggable'
export default {
  name: 'editor',
  components: { RulesRender, FormRender, ComponentsRender, vuedraggable },
  data () {
    return {
      comps: [],
      fieldsId: 0,
      rules: [],
      current: {
        idx: -1
      }
    }
  },
  watch: {
    'current.idx': {
      handler (idx) {
        this.handlePackageContent(idx)
      }
    }
  },
  methods: {
    onComponentsSelected (config) {
      const fields = this.fieldsId++
      if (config.required) {
        config.rules.push({ required: true, message: '' })
      }
      const length = this.comps.push({ ...config, props: 'fields' + (100 + fields), model: 'fields' + (100 + fields) })
      this.rules.push(config)
      this.current.idx = length - 1
    },
    onRuleChange (config) {
      this.$set(this.comps, this.current.idx, { ...this.comps[this.current.idx], ...config })
    },
    handlePackageContent (idx) {
      console.log('触发current更新', idx)
      console.log('数据集', JSON.parse(JSON.stringify(this.comps)))
      this.comps.forEach((item, index) => {
        console.log('index', index)
        if (idx === index) {
          item.showPackage = true
        } else {
          item.showPackage = false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
