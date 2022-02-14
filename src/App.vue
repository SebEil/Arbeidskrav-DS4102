<template>
  <exercise-header></exercise-header>
  <v-if-v-bind-reactive></v-if-v-bind-reactive>
  <br>
  <br>
  <br>
  <exercise-header></exercise-header>
  <exercise-list></exercise-list>
  <add-exercise></add-exercise>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VIfVBindReactive from "./components/VIfVBindReactive.vue"
import exerciseList from "./components/exercises/exerciseList.vue"
import exerciseHeader from "./components/exerciseHeader.vue"
import addExercise from "./components/exercises/addExercise.vue"

export default {
  name: 'App',
  components: {
    VIfVBindReactive,
    exerciseList,
    exerciseHeader,
    addExercise
  }
}
</script>


