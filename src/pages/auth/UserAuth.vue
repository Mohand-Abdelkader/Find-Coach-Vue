<template>
  <base-dialog :show="!!error" title="an Error occurred" @close="handleClose">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Authenticating">
    <base-spinner></base-spinner>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>

      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{
        switchButtonCaption
      }}</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseDialog from "../ui/BaseDialog.vue";
import BaseSpinner from "../ui/BaseSpinner.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      error: null,
      isLoading: false,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchButtonCaption() {
      if (this.mode === "login") {
        return "Signup Instead";
      } else {
        return "login Instead";
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode == "login") {
          //login
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch("signup", {
            email: this.email,
            password: this.password,
          });
        }
        const redirectUrl = "/" + (this.$route.query.redirect || "coaches");
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message;
      }
      this.isLoading = false;
    },
    handleClose() {
      this.error = null;
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;

  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
