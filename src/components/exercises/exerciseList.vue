<template>
    <section>

            <article class="m-3 text-center ">
                <div>
                    <h4><label class="form-label">Søk på øvelser</label></h4>   
                </div>
                <div class="search-container">
                    <input class="form-control text-center mb-2" v-model="exer" type="text" placeholder="Squat...">
                    <span class="btn btn-secondary w-100" @click="searchExercise" type="button" value="Søk">Søk</span> 
                </div>   
            </article>

            <article class="row align d-flex justify-content-center">
                <exercise-type 
                    class="col p-2 text-center" v-for="(exercise, i) in exercises" :key="i" 
                    :øvelse="exercise.øvelse" 
                    :targets="exercise.targets" 
                    :split="exercise.split"
                    :vekter="exercise.vekter"
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
        width: 420px;
        height: 380px;   
    }

    .search-container{
     padding: 1rem;
     background-color: rgb(161, 148, 148);
     border-radius: 25px;
     margin-bottom: 1rem;
     display: inline-block;
 }

</style>

