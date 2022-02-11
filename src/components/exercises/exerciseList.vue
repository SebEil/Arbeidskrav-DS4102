<template>
    <section>
        <h2>Exercises</h2>
        <section>
            <exercise-type v-for="(exercise, i) in exercises" :key="i" :øvelse="exercise.øvelse" :targets="exercise.targets" :split="exercise.split" :image="exercise.image"></exercise-type>
        </section>
    </section>
</template>

<script>
import exerciseServise from "../../services/exerciseServise"
import exerciseType from "./exerciseType.vue"

export default {
    setup(){
        const exercises = exerciseServise.getAll();

        return { exercises }
    },
    components: {
        exerciseType
    }
}
</script>

<style scoped>
    .upperbody{
        color: red;
    }
    .lowerbody{
        color: green;
    }
</style>