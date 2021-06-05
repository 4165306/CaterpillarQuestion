export default {
  watch: {
    value: {
      handler (val) {
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      value: ''
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
