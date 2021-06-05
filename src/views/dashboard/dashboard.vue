<template>
<div class="h-padding-10">
  <div>
    <a-row>
      <a-col :span="6">
        <div @click="$router.push('form')" style="cursor: pointer">
          我的项目
        </div>
      </a-col>
      <a-col :span="6">
        <div>
          新建项目
        </div>
      </a-col>
    </a-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style scoped>

</style>
