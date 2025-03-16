<template>
  <section>
    <base-card>
      <h2>Register as Coach</h2>

      <FormCoach></FormCoach>
    </base-card>
  </section>
</template>

<script>
import FormCoach from "../components/coaches/FormCoach.vue";
export default {
  components: {
    FormCoach,
  },
};
</script>
