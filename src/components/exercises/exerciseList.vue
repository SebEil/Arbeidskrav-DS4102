<template>
    <section>
        <h2>Exercises med grid</h2>
            <article lass="row mt-3">
                <exercise-type class="col" v-for="(exercise, i) in exercises" :key="i" :øvelse="exercise.øvelse" :targets="exercise.targets" :split="exercise.split" :image="exercise.image"></exercise-type>
            </article>       
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

