<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :title="area" :type="area">
      </base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="contactCoachLink"
        >Contact Coach</base-button
      >
      <base-button link :to="detailsCoachLink"> View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from "@/pages/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    contactCoachLink() {
      return this.$route.path + "/" + this.id + "/" + "contact";
    },
    detailsCoachLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
