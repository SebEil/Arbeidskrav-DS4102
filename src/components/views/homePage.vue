<template>
<exercise-header></exercise-header>
<exercise-list></exercise-list>
<add-exercise></add-exercise>
</template>

<script>
import exerciseList from "../exercises/exerciseList.vue"
import addExercise from "../exercises/addExercise.vue"
import exerciseHeader from "../exerciseHeader.vue"

export default {
  name: 'Home',
  components: {
    exerciseList,
    addExercise,
    exerciseHeader
  }
}
</script>