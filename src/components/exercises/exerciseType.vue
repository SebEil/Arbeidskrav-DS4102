<template>
    <section class="exerciseContainer">   
        <h3>{{ øvelse }}</h3>
        <h4>Muscle group used: {{ targets }}</h4>
        <h4 v-if="split === 'Abs'"> Don't forget to train {{ split }}</h4>
        <h4 v-else>Good when exercising: {{ split }} </h4>
        <h4 v-bind:class="[vekter === 'Yes' ? 'trenger' : 'trenger-ikke']">Equipment needed: {{ vekter }}</h4>
        <img :src="getImage()">
    </section>             
</template>

<script>


export default {

    props: {
        øvelse: String,
        targets: String,
        split: String,
        vekter: String,
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

<style scoped>

    section{ border: 1px solid black;}

    .trenger{
        color: green;
    }

    .trenger-ikke{
        color: red;
    }

    .exerciseContainer {
        border-radius: 25px;
        margin: 0.5rem;
        
        max-width: 460px;
        padding: 3rem;
    }

</style>