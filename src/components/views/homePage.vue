<template>
<exercise-header></exercise-header>
<exercise-list></exercise-list>
<add-exercise></add-exercise>
</template>

<script>
import ExerciseList from "../exercises/ExerciseList.vue"
import AddExercise from "../exercises/AddExercise.vue"
import ExerciseHeader from "../ExerciseHeader.vue"

export default {
  name: 'Home',
  components: {
    ExerciseList,
    AddExercise,
    ExerciseHeader
  }
}
</script>