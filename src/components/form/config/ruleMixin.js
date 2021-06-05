export default {
  watch: {
    selfConf: {
      handler (value) {
        console.log('value', value)
        this.$emit('onConfigChange', JSON.parse(JSON.stringify(value)))
      },
      deep: true
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      selfConf: {}
    }
  },
  created () {
    this.selfConf = JSON.parse(JSON.stringify(this.config))
  }
}
