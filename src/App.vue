<template>
  <div id="app">
    <p>Привет</p>

    <main-wrapper />
  </div>
</template>

<script>

import  MainWrapper  from "./components/main-wrapper";

export default {
  name: "App",
  components: {
    MainWrapper,
  },
};
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
