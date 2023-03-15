<template>
  <v-app>
    <v-content @submit.prevent="submitHandler" ref="form">
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title class="d-flex justify-center align-center"
          >Login</v-card-title
        >
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            type="email"
            label="Email"
            prepend-icon="mdi-account-circle"
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="passwordShow ? 'text' : 'password'"
            label="Password"
            prepend-inner-icon="mdi-lock"
            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="passwordShow = !passwordShow"
          >
          </v-text-field>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue" type="submit" @click="login">Login</v-btn>
          <v-btn color="blue">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";

export default {
  name: "UserCrud",
  data: () => ({
    passwordShow: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length > 5) || "Password must be more than 5 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    async login() {
      try {
        const response = await axios.post(`http://localhost:3000/login`, {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push("/cardapio");
      } catch (error) {
        console.error(error);
        alert("E-mail ou senha inválidos.");
      }
    },
  },
};
</script>
