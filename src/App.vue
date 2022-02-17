<template>
<main>
  <nav-bar></nav-bar>
  <footer-for></footer-for>
</main>  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from "./components/NavBar.vue"
import FooterFor from "./components/FooterFor.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    FooterFor
  }
}
</script>

<style >
  main{
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
    min-width: 460px;
  }
</style>

