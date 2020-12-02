<template>
  <div>
    <div id="subnav">
      <router-link to="./demo1">Demo1</router-link> |
      <router-link to="./demo2">Demo2</router-link>
    </div>
    <hr>
    <div id="vue-app-container"></div>
  </div>
</template>
<style scoped>
  #subnav {
    padding: 30px;
  }

  #subnav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #subnav a.router-link-exact-active {
    color: #42b983;
  }
</style>