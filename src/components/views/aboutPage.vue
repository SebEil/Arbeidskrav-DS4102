<template>
    <section>
        <h3>About us</h3>
        <div id="Lapp">
        <input v-model="searchQuery">
        <div v-for="r of resultQuery" :key="r.id">{{r.title}}</div>
        </div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident illum beatae hic quaerat natus deserunt! Consectetur,
            minima ullam ad delectus quam itaque voluptatum veniam, inventore,
            debitis facilis corporis hic a? Id adipisci officiis saepe! Atque facere
            aspernatur cupiditate nihil quo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident illum beatae hic quaerat natus deserunt! Consectetur,
            minima ullam ad delectus quam itaque voluptatum veniam, inventore,
            debitis facilis corporis hic a? Id adipisci officiis saepe! Atque facere
            aspernatur cupiditate nihil quo! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident illum beatae hic quaerat natus deserunt! Consectetur,
            minima ullam ad delectus quam itaque voluptatum veniam, inventore,
            debitis facilis corporis hic a? Id adipisci officiis saepe! Atque facere
            aspernatur cupiditate nihil quo! 
        </p>
    </section>
</template>

<script>
export default{
    name: "Lapp",
    data() {
        return {
      searchQuery: null,
      resources: [
        { id: 1, title: "Benchpress" },
        { id: 2, title: "vue for dummies" },
        { id: 3, title: "dos for dummies" },
        { id: 4, title: "windows for dummies" },
        { id: 5, title: "html for dummies" }
      ]
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
    height: 1000px;
    padding: 3rem;
}

h3{
    text-align: center;
}

p{
    margin: 1rem;
    padding: 1rem;
    border-radius: 25px;
    background-color: rgb(175, 164, 164);
    min-height: 40rem;

}

</style>