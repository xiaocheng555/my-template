<template>
  <div class="app-layout">
    <layout-header></layout-header>
    <div class="layout-body">
      <layout-sidebar></layout-sidebar>
      <div class="layout-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './layout-header'
import LayoutSidebar from './layout-sidebar'

export default {
  name: 'layout',
  components: {
    LayoutHeader,
    LayoutSidebar
  }
}
</script>

<style lang='less'>
.layout-body {
  padding-top: 60px;
  padding-left: 250px;
}
.layout-main {
  padding: 40px;
}
</style>
