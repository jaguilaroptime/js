<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Fetch/>
    <HelloWorld msg="Welcome Jaguilar"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Fetch from './components/fetch';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Fetch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
