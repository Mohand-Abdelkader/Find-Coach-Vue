<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input type="text" name="" id="firstName" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">last Name</label>
      <input type="text" name="" id="lastName" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="desc">desorption</label>
      <textarea rows="5" id="desc" v-model.trim="desc" />
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" name="" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <h3>areas for Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development </label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Development </label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Advisor</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
emits: ["save-data"];
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      rate: null,
      desc: "",
      areas: [],
    };
  },

  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        rate: this.rate,
        desc: this.desc,
        areas: this.areas,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
