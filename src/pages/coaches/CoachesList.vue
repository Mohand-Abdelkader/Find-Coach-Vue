<template>
  <coach-filter @change-filter="setFilter"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filterCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <h2 v-else>There is No Coaches found</h2>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "../components/coaches/CoachItem.vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseCard from "../ui/BaseCard.vue";
import CoachFilter from "../components/coaches/CoachFilter.vue";
export default {
  components: { CoachItem, BaseCard, BaseButton, CoachFilter },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filterCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes("frontend"))
          return true;
        if (this.activeFilter.backend && coach.areas.includes("backend"))
          return true;
        if (this.activeFilter.career && coach.areas.includes("career"))
          return true;
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilter(updateFilter) {
      this.activeFilter = updateFilter;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
