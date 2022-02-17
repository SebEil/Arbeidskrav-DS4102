import {ref} from "vue" 

const exerciseService = ( function(){

    const exercises = ref([
        { øvelse: "Benchpress", targets: "Chest", split: "Upperbody", vekter: "Yes", image: "benchpress.jpg"},
        { øvelse: "Pull-up", targets: "Back", split: "Upperbody", vekter: "Yes", image: "pullup.jpg"},
        { øvelse: "Shoulderpress", targets: "Shoulders", split: "Upperbody", vekter: "Yes", image: "shoulderpress.jpg"},
        { øvelse: "Leg-press", targets: "Legs", split: "Lowerbody", vekter: "Yes", image: "legpress.jpg"},
        { øvelse: "Biceps-curls", targets: "Arms", split: "Upperbody", vekter: "Yes", image: "biceps-curls.jpg"},
        { øvelse: "Pushups", targets: "Chest", split: "Upperbody", vekter: "No", image: "pushups.jpg"},
        { øvelse: "Sit-ups", targets: "Abs", split: "Abs", vekter: "No", image: "sit-ups.jpg"},
        { øvelse: "Squat", targets: "Legs", split: "Lowerbody", vekter: "No", image: "squat.jpg"}
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