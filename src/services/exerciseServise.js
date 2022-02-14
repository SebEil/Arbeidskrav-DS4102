import {ref} from "vue" 

const exerciseService = ( function(){

    const exercises = ref([
        { øvelse: "Benchpress", targets: "Chest", split: "Upperbody", image: "benchpress.jpg"},
        { øvelse: "Pull-up", targets: "Back", split: "Upperbody", image: "pullup.jpg"},
        { øvelse: "Shoulderpress", targets: "Shoulders", split: "Upperbody", image: "shoulderpress.jpg"},
        { øvelse: "Leg-press", targets: "Legs", split: "Lowerbody", image: "legpress.jpg"}
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