<template>
  <v-app>
    <v-container fluid class="error-page">
      <v-row class="logo-wrapper">
        <v-img src="@/assets/logo.svg" contain width="62" height="48"></v-img>
        <span class="logo-title">Vue Material Admin</span>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="8">
          <div class="card">
            <span class="error-logo">404</span>
            <p class="error-text">Oops. Looks like the page you're looking for no longer exists</p>
            <p class="error-subtext">But we're here to bring you back to safety</p>

            <v-btn
                class="text-capitalize"
                dark
                x-large
                :color="config.light.primary"
                to="dashboard"
            >
              Back to Home
            </v-btn>
          </div>
        </v-col>
      </v-row>
  </v-container>
  </v-app>
</template>

<script>
import config from '@/config';

export default {
  name: 'Error',
  data(){
    return{
      config
    }
  }
};
</script>

<style src="./Error.scss" lang="scss"></style>
