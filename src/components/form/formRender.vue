<template>
<div>
  <a-form-model>
    <div class="onHover h-pos-rel" :class="showPackage ? 'onSelected' : ''">
      <div class="h-pos-abs" style="right: 20px; top: -10px;" v-show="showPackage">
        <a-icon type="delete" style="font-size:20px;color: red" @click="remove()" />
      </div>
      <compoennt :is="getEL" :config="config" @input="(value) => $emit('input', value)" />
    </div>
  </a-form-model>
</div>
</template>

<script>
export default {
  name: 'formRender',
  props: {
    el: {
      type: String,
      default: () => ''
    },
    config: {
      type: Object,
      default: () => {}
    },
    showPackage: {
      type: Boolean,
      default: () => false
    },
    idx: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    getEL () {
      return () => import(`./fields/${this.el}`)
    }
  },
  methods: {
    remove () {
      this.$emit('onRemove', this.idx)
    }
  }
}
</script>

<style scoped>
.onHover:hover, .onSelected {
  border-radius: 10px ;
  background: #f1fffd;
  padding: 10px;
}
</style>
