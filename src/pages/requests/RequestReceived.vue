<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handelError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="request in receivedRequest"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>you haven't received any request</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../components/requests/RequestItem.vue";
import BaseSpinner from "../ui/BaseSpinner.vue";
export default {
  components: { RequestItem, BaseSpinner },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequest() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  created() {
    this.loadRequest();
    console.log(this.receivedRequest);
  },
  methods: {
    async loadRequest() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequest");
      } catch (error) {
        this.error = error.message || "Failed to load requests";
      }
      this.isLoading = false;
    },
    handelError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
