<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filterCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h2 v-else>There is No Coaches found</h2>
  </section>
</template>

<script>
export default {
  computed: {
    filterCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
