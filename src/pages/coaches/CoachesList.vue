<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handelError">
    <p>{{ error }}</p>
  </base-dialog>
  <coach-filter @change-filter="setFilter"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadData(true)"
          >Refresh</base-button
        >
        <base-button v-if="!isLogin" link to="/auth?redirect=register"
          >Login to Register a coach</base-button
        >
        <base-button
          v-if="!isCoach && !isLoading && isLogin"
          link
          to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches && !isLoading">
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
import BaseSpinner from "../ui/BaseSpinner.vue";
import BaseDialog from "../ui/BaseDialog.vue";
export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
    CoachFilter,
    BaseSpinner,
    BaseDialog,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isAuthenticated;
    },
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
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    handelError() {
      this.error = null;
    },
    setFilter(updateFilter) {
      this.activeFilter = updateFilter;
    },
    async loadData(Refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: Refresh,
        });
      } catch (error) {
        this.error = error.message || "something went wrong";
      }
      this.isLoading = false;
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
