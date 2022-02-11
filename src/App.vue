<template>
  <exercise-header></exercise-header>
  <v-if-v-bind-reactive></v-if-v-bind-reactive>
  <br>
  <exercise-header></exercise-header>
  <exercise-list></exercise-list>

</template>

<script>
import VIfVBindReactive from "./components/VIfVBindReactive.vue"
import exerciseList from "./components/exercises/exerciseList.vue"
import exerciseHeader from "./components/exerciseHeader.vue"

export default {
  name: 'App',
  components: {
    VIfVBindReactive,
    exerciseList,
    exerciseHeader
  }
}
</script>


