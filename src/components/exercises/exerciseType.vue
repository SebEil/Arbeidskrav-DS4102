<template>
    <section>   
        <h3>{{ øvelse }}</h3>
        <h4>Muskelgruppe som brukes: {{ targets }}</h4>
        <h4>For økter hvor du skal trene: {{ split }} </h4>
        <img :src="getImage()"> 
    </section>             
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

<style scoped>

    section{ border: 1px solid black;}

</style>