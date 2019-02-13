<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="transparent" class="elevation-0">
          <v-card-text>
            <v-container>
              <form @submit.prevent="onRegister">
                <v-layout row>
                  <v-flex xs12>
                      <div class="headline">Utwórz swoje konto</div>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Adres e-mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Hasło"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirm_password"
                      label="Potwierdź hasło"
                      id="confirm_password"
                      v-model="confirm_password"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Zarejestruj</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirm_password: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirm_password ? 'Podane hasła nie są takie same' : true
      },
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onRegister () {
        this.$store.dispatch('registerUser', {email: this.email, password: this.password})
      }
    }
  }
</script>