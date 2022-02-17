<template>
    <section class="m-3 text-center">
        <h3>Workout Examples</h3>
        <div id="Lapp" class="row align d-flex justify-content-center">
        <input v-model="searchQuery" placeholder="Search for chestworkout...">
          <article v-for="r of resultQuery" :key="r.id" class="bg-warning col p-2 text-center" v-show='toggle'>
            <h3>{{r.title}}</h3>
            <p>{{r.description1}}</p>
            <p>{{r.description2}}</p>
          </article>
        </div>
        <button class="btn-danger" @click='toggle = !toggle'>hide/show workouts</button>
    </section>
</template>


<script>

export default{
    name: "Lapp",
    data() {
        return {
      searchQuery: null,
      resources: [
        { id: 1, title: "Chest-workout:", description1: "1. Benchpress", description2: "2. Incline benchpress"},
        { id: 2, title: "Back-workout:", description1: "1. Deadlift", description2: "2. Pull-ups"},
        { id: 3, title: "Legs-workout:", description1: "1. Leg-press", description2: "2. Squats"},
        { id: 4, title: "Shoulders-workout", description1: "1. Shoulderpress", description2: "2. Arnold-press"}
      ],
      toggle: true
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    }
  }
};
        

</script>

<style scoped>
section{
    min-height: 50rem;
}

article{
  border: 2px solid black;
  margin: 1rem;
}

input{
  margin: 2rem;
}

button{
  height: 2rem;
  width: 15rem;
  margin-top: 3rem;
}
</style>