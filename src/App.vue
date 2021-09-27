<template>
  <div class="app">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/navigator/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
  .app{
    max-width: 1140px;
    margin: 0 auto;
  }
</style>
