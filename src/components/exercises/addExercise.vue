<template>
    <section class="mb-5 midtstill">
        <h3>Legg til ny exercise</h3>
        <div class="mb-3">
            <label class="form-label">Navn</label>
            <input class="form-control" v-model="øvelse" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Muskelgruppe</label>
            <input class="form-control" v-model="targets" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Split</label>
            <select v-model="split">
                <option disabled value="">Øvelsen er rettet</option>
                <option>Upper</option>
                <option>Lower</option>
            </select>
        </div>
        <input class="btn btn-secondary w-100" @click="addExercise" type="button" value="Legg til øvelse">
    </section>
</template>

<script>
import { ref } from 'vue'
import exerciseServise from '../../services/exerciseServise';

export default {
    setup(){
        const øvelse = ref();
        const targets = ref();
        const split = ref();

        const addExercise = () => {

            const newExercise = {
                øvelse: øvelse.value,
                targets: targets.value,
                split: split.value
            };
            exerciseServise.addExercise( newExercise );
        }

        return {
            øvelse,
            targets,
            split,
            addExercise
        }
    }   
}
</script>

<style>
 .midtstill{ 
     text-align: center;
 }
</style>
