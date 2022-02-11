<template>
    <section>
        <h2>Exercises:</h2>
        <article>
            <h3>{{trainingExercise1.name}}</h3>
            <img :src="require(`@/assets/images/${trainingExercise1.image}`)">
            <p>Targets musclegroup: {{ trainingExercise1.targets }}</p>
        </article>
        <article>
            <h3>{{trainingExercise2.name}}</h3>
            <img :src="require(`@/assets/images/${trainingExercise2.image}`)">
            <p>Targets musclegroup: {{ trainingExercise2.targets }}</p>
        </article>
        <article>
            <h3>{{trainingExercise3.name}}</h3>
            <img :src="require(`@/assets/images/${trainingExercise3.image}`)">
            <p>Targets musclegroup: {{ trainingExercise3.targets }}</p>
        </article>
        <article>
            <h3>{{trainingExercise4.name}}</h3>
            <img :src="require(`@/assets/images/${trainingExercise4.image}`)">
            <p>Targets musclegroup: {{ trainingExercise4.targets }}</p>
        </article>
    </section>
</template>

<script>
import {reactive} from "vue" 
export default {
    setup(){
        const trainingExercise1 = reactive({
            image: "benchpress.jpg",
            name: "Benchpress",
            targets: "Chest"
        });

        const trainingExercise2 = reactive({
            image: "pullup.jpg",
            name: "Pull-up",
            targets: "Back"
        });

        const trainingExercise3 = reactive({
            image: "shoulderpress.jpg",
            name: "Shoulderpress",
            targets: "Shoulders"
        });

        const trainingExercise4 = reactive({
            image: "legpress.jpg",
            name: "Leg-press",
            targets: "Legs"
        });

        return { trainingExercise1, trainingExercise2,
                trainingExercise3, trainingExercise4 }
        
    }
}
</script>