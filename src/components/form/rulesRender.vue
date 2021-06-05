<template>
<div>
  <a-form-model layout="horizontal" :label-col="{span: 8}" :wrapper-col="{span: 16}">
    <component :is="getEL" :config="config" @onConfigChange="onRuleChange" v-if="el !== ''"/>
  </a-form-model>
</div>
</template>

<script>
export default {
  name: 'rulesRender',
  props: {
    el: {
      type: String,
      default: () => ''
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getEL () {
      return () => import(`./rules/${this.el}`)
    }
  },
  methods: {
    onRuleChange (config) {
      this.$emit('onRuleChange', config, this.idx)
    }
  }
}
</script>

<style scoped>

</style>
