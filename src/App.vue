<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Functionality */
html {
  scroll-behavior: smooth;
}

/* Menu */
.menuWithBg {
  background-color: rgba(23, 87, 200, 0.4);
}
.sticky {
  z-index: 10;
  position: fixed;
  bottom: 1;
  width: 100%;
}
.menuitem {
  font-size: min(40px, 3.7vw);
  width: 18vw;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: rgb(250, 210, 001);
  display: block;
}

.menuitem:hover,
.menuitem:focus {
  border-bottom: 2px solid;
}

.active {
  border-bottom: 2px solid;
}

.logo {
  width: min(10vw, 105px);
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

/* Main layout */
.contentDiv {
  margin: auto;
  justify-content: center;
  padding-top: min(15vw, 160px);
  max-width: 992px;
  align-content: center;
  align-self: center;
  align-items: center;
}

.parent {
  overflow: auto;
}

.topHr {
  border: 10px solid rgb(45, 217, 89);
  border-radius: 5px;
  opacity: 0;
}
</style>
