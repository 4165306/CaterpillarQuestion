<template>
<div>
  <div v-for="(item, index) in comps" :key="index" class="h-margin-bottom-10">
    <div>
      {{ item.type }}
    </div>
    <div class="h-flex" style="flex-wrap: wrap">
      <h-tag
        v-for="(item2, idx) in item.child"
        :key="idx"
        :text="item2.text"
        :icon="item2.icon"
        @click.native="emitOnTap(item2.config)"
        style="width: 120px;"
        class="h-flex h-jus-center"
      />
    </div>
  </div>
</div>
</template>

<script>
import Components from './config/components'
import HTag from '@/components/tags/h-tag'
export default {
  name: 'componentsRender',
  components: { HTag },
  data () {
    return {
      comps: Components
    }
  },
  methods: {
    emitOnTap (config) {
      this.$emit('onTap', JSON.parse(JSON.stringify(config)))
    }
  }
}
</script>

<style scoped>

</style>
