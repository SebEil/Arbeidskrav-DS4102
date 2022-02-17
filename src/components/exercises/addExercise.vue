<template>
<br>
<section class="container">
    <section class="mb-5 midtstill">
        <h3>Add new Exercise</h3>
        <div class="mb-3">
            <label class="form-label">Name of exercise</label>
            <input class="form-control" v-model="øvelse" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Muslce group</label>
            <input class="form-control" v-model="targets" type="text">
        </div>
        <div class="mb-3">
            <label class="form-label">Perfect for</label>
            <select v-model="split">
                <option disabled value="">Exercise for</option>
                <option>Upper</option>
                <option>Lower</option>
                <option>Arms</option>
                <option>Abs</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Is equipment needed?</label>
            <select v-model="vekter">
                <option disabled value="">Machines etc..</option>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>

        <input class="btn btn-secondary w-100" @click="addExercise" type="button" value="Add exercise">
    </section>
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
        const vekter = ref();

        const addExercise = () => {

            const newExercise = {
                øvelse: øvelse.value,
                targets: targets.value,
                split: split.value,
                vekter: vekter.value
            };
            exerciseServise.addExercise( newExercise );
        }

        return {
            øvelse,
            targets,
            split,
            vekter,
            addExercise
        }
    }   
}
</script>

<style>
 .midtstill{ 
     text-align: center;
 }

 .container{
     padding: 1rem;
     background-color: rgb(161, 148, 148);
     border-radius: 25px;
     margin-bottom: 1rem;
 }
</style>
