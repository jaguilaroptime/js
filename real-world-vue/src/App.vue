<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Binding/>
    <Axios/>
    <Filters/>
    <Fetch/>
    <HelloWorld msg="Welcome Jaguilar"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Fetch from './components/fetch';
import Filters from './components/filters';
import Axios from './components/axios';
import Binding from './components/binding';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Fetch,
    Filters,
    Axios,
    Binding
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
