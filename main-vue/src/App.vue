<template>
  <div id="main-fream-container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vue/">VueDemo</router-link> |
      <router-link to="/ng11/">Angular11Demo</router-link> |
      <router-link to="/ng8/">Angular8Demo</router-link> |
      <router-link to="/ng6/">Angular6Demo</router-link>
    </div>
    <hr>
    <router-view />
    <!-- 子应用盒子 -->
    <div id="app-container"></div>
  </div>
</template>

<style>
  #main-fream-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>