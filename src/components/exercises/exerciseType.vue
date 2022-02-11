<template>
    <article>
        <h3>{{ øvelse }}</h3>
        <h3>Targetmusclegroup: {{ targets }}</h3>
        <h2>{{ split }}</h2>
        <img :src="getImage()">
    </article>
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