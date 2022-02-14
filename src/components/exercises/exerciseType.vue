<template>
         
    <h3>{{ øvelse }}</h3>
    <h4>Targetmusclegroup: {{ targets }}</h4>
    <h4>Perfect workouts for {{ split }} </h4>
    <img :src="getImage()"> 
               
</template>

<script>

export default {
    props: {
        øvelse: String,
        targets: String,
        split: String,
        image: String
    },
    setup(props){
        const getImage = () => {
            let image;

            try{
                image = require( `@/assets/images/${ props.image }` );
            }catch{
                image = require( `@/assets/images/no-image.jpg` );
            }
            return image
        }
        return { getImage }
    }
}
</script>

