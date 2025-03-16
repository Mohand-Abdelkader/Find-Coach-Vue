<template>
  <section>
    <base-card>
      <h1>{{ fullName }}</h1>
      <h3>${{ rate }}hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested ? reach us now</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :title="area" :type="area"></base-badge>
      <p>{{ desc }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectCoach: null,
    };
  },
  created() {
    this.selectCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id == this.id
    );
  },
  computed: {
    fullName() {
      return this.selectCoach.firstName + " " + this.selectCoach.lastName;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    areas() {
      return this.selectCoach.areas;
    },
    rate() {
      return this.selectCoach.hourlyRate;
    },
    decs() {
      return this.selectCoach.description;
    },
  },
};
</script>
