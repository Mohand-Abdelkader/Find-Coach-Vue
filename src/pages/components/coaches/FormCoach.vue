<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name=""
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clear('firstName')"
      />
      <p v-if="!firstName.isValid">First Name must no be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">last Name</label>
      <input
        type="text"
        name=""
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clear('lastName')"
      />
      <p v-if="!lastName.isValid">Last Name must no be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !desc.isValid }">
      <label for="desc">desorption</label>
      <textarea
        rows="5"
        id="desc"
        v-model.trim="desc.val"
        @blur="clear('desc')"
      />
      <p v-if="!desc.isValid">description Name must no be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        name=""
        id="rate"
        v-model.number="rate.val"
        @blur="clear('rate')"
      />
      <p v-if="!rate.isValid">rate must be greater then 0</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>areas for Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clear('areas')"
        />
        <label for="frontend">Frontend Development </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clear('areas')"
        />
        <label for="backend">Backend Development </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clear('areas')"
        />
        <label for="career">Career Advisor</label>
      </div>
      <p v-if="!areas.isValid">at least one must be selected</p>
    </div>
    <base-button>Register</base-button>
    <p v-if="!formValid">please fix the above error and submit again</p>
  </form>
</template>

<script>
emits: ["save-data"];
export default {
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      desc: { val: "", isValid: true },
      areas: { val: [], isValid: true },
      formValid: true,
    };
  },

  methods: {
    clear(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.firstName.val == "") {
        this.firstName.isValid = false;
        this.formValid = false;
      }
      if (this.lastName.val == "") {
        this.lastName.isValid = false;
        this.formValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        console.log(this.rate.val);
        this.rate.isValid = false;
        this.formValid = false;
      }
      if (this.desc.val == "") {
        this.desc.isValid = false;
        this.formValid = false;
      }
      if (this.areas.val.length == 0) {
        this.areas.isValid = false;
        this.formValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formValid) {
        return;
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        rate: this.rate.val,
        desc: this.desc.val,
        areas: this.areas.val,
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
