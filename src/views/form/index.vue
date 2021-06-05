<template>
<div class="full-height">
  <a-tabs default-active-key="1" class="full-height">
    <a-tab-pane key="1" tab="编辑表单" class="full-height">
      <editor />
    </a-tab-pane>
    <a-tab-pane key="2" tab="预览表单" force-render>
      <preview />
    </a-tab-pane>
    <a-tab-pane key="3" tab="设置表单">
      <settings />
    </a-tab-pane>
    <a-tab-pane key="4" tab="发布表单">
      <release />
    </a-tab-pane>
    <a-tab-pane key="5" tab="回收表单">
      <recovery />
    </a-tab-pane>
  </a-tabs>
</div>
</template>

<script>
import editor from './views/editor'
import preview from './views/preview'
import recovery from './views/recovery'
import release from './views/release'
import settings from './views/settings'
export default {
  name: 'form',
  components: { editor, preview, recovery, release, settings }
}
</script>

<style>
#app {
  height: 100% !important;
}
</style>
