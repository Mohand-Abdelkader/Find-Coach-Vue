<template>
  <section>
    <base-card>
      <h2>Register as Coach</h2>

      <FormCoach @save-data="saveData"></FormCoach>
    </base-card>
  </section>
</template>

<script>
import FormCoach from "../components/coaches/FormCoach.vue";
export default {
  components: {
    FormCoach,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
