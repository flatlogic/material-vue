<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Vue Material Admin</p>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center">
          <v-row no-gutters class="align-start">
            <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
              <div class="login-wrapper pt-md-4 pt-0">
                <v-tabs v-model="authTab" grow>

                  <v-tab value="tab-login">
                    LOGIN
                  </v-tab>
                  <v-tab value="tab-newUser">
                    New User
                  </v-tab>

                  </v-tabs>
                <v-tabs-window v-model="authTab">
                  <v-tabs-window-item value="tab-login">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p class="login-slogan text-h3 text-center font-weight-medium my-10">Good Morning, User</p>
                            <v-btn height="45" block color="white" elevation="0" class="google text-capitalize">
                              <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                              Sign in with Google</v-btn>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center my-8">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-form>
                            <v-col>
                              <v-text-field
                                  v-model="email"
                                  :rules="emailRules"
                                  value="admin@flatlogic.com"
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="password"
                                  :rules="passRules"
                                  type="password"
                                  label="Password"
                                  hint="At least 6 characters"
                                  required
                              ></v-text-field>

                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  class="text-capitalize"
                                  size="large"
                                  :disabled="password.length === 0 || email.length === 0"
                                  color="primary"
                                  @click="login"
                              >
                                Login</v-btn>
                              <v-btn size="large" variant="text" class="text-capitalize text-primary">Forget Password</v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tabs-window-item>

                  <v-tabs-window-item value="tab-newUser">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">

                          <v-col>
                            <p class="login-slogan text-h3 text-center font-weight-medium mt-10">Welcome!</p>
                            <p class="login-slogan text-h4 text-center font-weight-medium mb-10">Create your account</p>
                          </v-col>

                          <v-form>
                            <v-col>
                              <v-text-field
                                  v-model="createFullName"
                                  label="Full Name"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="createEmail"
                                  :rules="emailRules"
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="createPassword"
                                  :rules="passRules"
                                  type="password"
                                  label="Password"
                                  hint="At least 6 characters"
                                  required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  size="large"
                                  block
                                  :disabled="createFullName.length === 0 || createEmail.length === 0 || createPassword === 0"
                                  color="primary"
                                  @click="login"
                              >
                                Create your account</v-btn>
                            </v-col>
                          </v-form>

                          <v-col cols="12" class="d-flex align-center my-4">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>

                          <v-btn height="45" block color="white" elevation="0" class="google text-capitalize">
                            <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                            Sign in with Google</v-btn>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tabs-window-item>

                </v-tabs-window>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="text-primary">© 2014-2020 <a href="https://flatlogic.com/" class="text-decoration-none">Flatlogic</a>, LLC. All rights reserved.</div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        authTab: 'tab-login',
        email: 'admin@flatlogic.com',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        createFullName: 'John Smith',
        createEmail: 'john@flatlogic.com',
        createPassword: '123456',
        password: '123456',
        passRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Min 6 characters'
        ]
      }
    },
    methods: {
      login(){
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/dashboard');
      }
    },
    created() {
      if (window.localStorage.getItem('authenticated') === 'true') {
        this.$router.push('/dashboard');
      }
    }
  }

</script>

<style src="./Login.scss" lang="scss"/>
