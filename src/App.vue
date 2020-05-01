<template>
  <div class="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
body {
  background-color: #fff;
  .app {
    text-align: center;
  }
}
</style>
