<template>
    <section>
            <article class="row">
                <exercise-type 
                    class="col p-2 text-center" v-for="(exercise, i) in exercises" :key="i" 
                    :øvelse="exercise.øvelse" 
                    :targets="exercise.targets" 
                    :split="exercise.split" 
                    :image="exercise.image">
                </exercise-type>
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

<style>
    img{
        width: 450px;
        height: 400px;
    }
</style>

