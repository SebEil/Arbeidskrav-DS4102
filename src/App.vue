<template>
<main>
  <nav-bar></nav-bar>
  <section></section>
  <exercise-header></exercise-header>
  <v-if-v-bind-reactive></v-if-v-bind-reactive>
  <br>
  <br>
  <br>
  <exercise-header></exercise-header>
  <exercise-list></exercise-list>
  <add-exercise></add-exercise>
</main>  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VIfVBindReactive from "./components/VIfVBindReactive.vue"
import exerciseList from "./components/exercises/exerciseList.vue"
import exerciseHeader from "./components/exerciseHeader.vue"
import addExercise from "./components/exercises/addExercise.vue"
import navBar from "./components/navBar.vue"

export default {
  name: 'App',
  components: {
    VIfVBindReactive,
    exerciseList,
    exerciseHeader,
    addExercise,
    navBar
  }
}
</script>

<style >
  main{
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  }
</style>

