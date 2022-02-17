import {ref} from "vue" 

const exerciseService = ( function(){

    const exercises = ref([
        { øvelse: "Benchpress", targets: "Chest", split: "Upperbody", vekter: "Ja", image: "benchpress.jpg"},
        { øvelse: "Pull-up", targets: "Back", split: "Upperbody", vekter: "Ja", image: "pullup.jpg"},
        { øvelse: "Shoulderpress", targets: "Shoulders", split: "Upperbody", vekter: "Ja", image: "shoulderpress.jpg"},
        { øvelse: "Leg-press", targets: "Legs", split: "Lowerbody", vekter: "Ja", image: "legpress.jpg"},
        { øvelse: "Biceps-curls", targets: "Arms", split: "Upperbody", vekter: "Ja", image: "biceps-curls.jpg"},
        { øvelse: "Pushups", targets: "Chest", split: "Upperbody", vekter: "Nei", image: "pushups.jpg"},
        { øvelse: "Sit-ups", targets: "Abs", split: "Abs", vekter: "Nei", image: "sit-ups.jpg"},
        { øvelse: "Squat", targets: "Legs", split: "Lowerbody", vekter: "Nei", image: "squat.jpg"}
    ]);

    const getAll = () => {
        return exercises;
    }

    const addExercise = ( newExercise ) => {
        exercises.value.push( newExercise );
    }

    return { 
        getAll,
        addExercise
     }

} () );

export default exerciseService;