<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
html, body, div, section, label, input, form, span, a, button {
  padding: 0;
  margin: 0;
  position: relative;
}
#app {
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none;
}
</style>
