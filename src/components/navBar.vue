<template>
<section class="background-color">
        <section class="row d-flex justify-content-end">
            <div class="col">
                <img class="navImg " src="@/assets/logo.png" alt="no-image">
            </div>           
            <article class="col text-center">
                <div>
                    Info
                </div>
            </article>
            <article class="col text-center">
                <div>
                    Hjem
                </div>
            </article>
            <article class="col text-center">
                <div>
                    Kontakt oss
                </div>
            </article>            
        </section>
</section>        
</template>

<style scoped>
    article {
            padding: 1rem;
            max-width: 8rem;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;        
        }
    
    article:hover {
        background-color: rgb(122, 117, 110);
    }

    .background-color {
        background: conic-gradient(from -90deg at top left, black, white);    
    }

    .navImg {
        max-width: 5.5rem;
        max-height: 3.5rem;
        padding-left: 0.5rem;
    }

</style>