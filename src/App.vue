<template>
  <div id="app">
    <!-- <Mainc></Mainc>
    <testc></testc> -->
    <!-- <mapTest></mapTest> -->
    <getter></getter>
  </div>
</template>

<script>
import Mainc from './components/Main.vue'
import testc from './components/test.vue'
import mapTest from './components/mapStateTest.vue'
import getter from './components/getter.vue'

export default {
  //
  name: 'App',
  components: {
    Mainc,
    testc,
    mapTest,
    getter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
