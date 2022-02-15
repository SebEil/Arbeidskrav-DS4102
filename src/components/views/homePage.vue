<template>
  <exercise-list></exercise-list>
  <add-exercise></add-exercise>
</template>

<script>
import exerciseList from "../exercises/exerciseList.vue"
import addExercise from "../exercises/addExercise.vue"

export default {
  name: 'Home',
  components: {
    exerciseList,
    addExercise
  }
}
</script>