<template>
    <section class="row">
        <article class="col p-2 text-center">
            <h2>{{trainingExercise1.name}}</h2>
            <img :src="require(`@/assets/images/${trainingExercise1.image}`)">
            <p>Targets musclegroup: {{ trainingExercise1.targets }}</p>
            <p v-bind:class="trainingExercise1.isExpensive = true ? 'cheap-membership':'expensive-membership'">
                This exercise requires: {{trainingExercise1.membershipPrice > 250 ? "Gold membership" : "Bronze membership"}}</p>
            <p v-if="trainingExercise1.requiresOwnEquipment == true">This exercise requires own equipment</p>
            <p v-else>The gym provides everything needed for this exercise</p>        
        </article>
        <article class="col p-2 text-center">
            <h2>{{trainingExercise2.name}}</h2>
            <img :src="require(`@/assets/images/${trainingExercise2.image}`)">
            <p>Targets musclegroup: {{ trainingExercise2.targets }}</p>
            <p v-bind:class="trainingExercise2.isExpensive = true ? 'cheap-membership':'expensive-membership'">
                This exercise requires: {{trainingExercise2.membershipPrice > 250 ? "Gold membership" : "Bronze membership"}}</p>
            <p v-if="trainingExercise2.requiresOwnEquipment == true">This exercise requires own equipment</p>
            <p v-else>The gym provides everything needed for this exercise</p>        
        </article>
        <article class="col p-2 text-center">
            <h2>{{trainingExercise3.name}}</h2>
            <img :src="require(`@/assets/images/${trainingExercise3.image}`)">
            <p>Targets musclegroup: {{ trainingExercise3.targets }}</p>
            <p v-bind:class="trainingExercise3.isExpensive = false ? 'cheap-membership':'expensive-membership'">
                This exercise requires: {{trainingExercise3.membershipPrice > 250 ? "Gold membership" : "Bronze membership"}}</p>
            <p v-if="trainingExercise3.requiresOwnEquipment == true" v-bind:class="trainingExercise3.membershipPrice < 250 ? 'own-equipment':'own-equipment'">This exercise requires own equipment</p>
            <p v-else>The gym provides everything needed for this exercise</p>
        </article>
        <article class="col p-2 text-center">
            <h2>{{trainingExercise4.name}}</h2>
            <img :src="require(`@/assets/images/${trainingExercise4.image}`)">
            <p>Targets musclegroup: {{ trainingExercise4.targets }}</p>
            <p v-bind:class="trainingExercise4.isExpensive = true ? 'cheap-membership':'expensive-membership'">
                This exercise requires: {{trainingExercise4.membershipPrice > 250 ? "Gold membership" : "Bronze membership"}}</p>
            <p v-if="trainingExercise4.requiresOwnEquipment == true">This exercise requires own equipment</p>
            <p v-else>The gym provides everything needed for this exercise</p>
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
            targets: "Chest",
            membershipPrice: 249,
            isExpensive: false,
            requiresOwnEquipment: false

        });

        const trainingExercise2 = reactive({
            image: "pullup.jpg",
            name: "Pull-up",
            targets: "Back",
            membershipPrice: 249,
            isExpensive: false,
            requiresOwnEquipment: false
        });

        const trainingExercise3 = reactive({
            image: "swimming.jpg",
            name: "Swimming",
            targets:"Whole body",
            membershipPrice: 500,
            isExpensive: true,
            requiresOwnEquipment: true
        });

        const trainingExercise4 = reactive({
            image: "legpress.jpg",
            name: "Leg-press",
            targets: "Legs",
            membershipPrice: 249,
            isExpensive: false,
            requiresOwnEquipment: false
        });

        return { trainingExercise1, trainingExercise2,
                trainingExercise3, trainingExercise4 }
        
    }
}
</script>

<style scoped>

    .expensive-membership{
        color: red;
}

    .cheap-membership{
        color: green;
}

    .own-equipment{
        color: rgb(255, 187, 0);
    }

    article{
        padding: 2rem;
    }

    img{
        width: 450px;
        height: 400px;
    }

    article{
        border: 2px solid black;
    }
</style>

