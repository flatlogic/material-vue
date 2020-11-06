<template>
  <v-container fluid class="typography-page">
    <h1 class="page-title mt-10 mb-6">Typography</h1>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Headings</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="typography-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Typography Colors</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="typography-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <h1 class="primary--text">h1. Heading</h1>
                <h2 class="success--text">h2. Heading</h2>
                <h3 class="secondary--text">h3. Heading</h3>
                <h4 class="warning--text">h4. Heading</h4>
                <h5 class="primary--text">h5. Heading</h5>
                <h6 class="info--text">h6. Heading</h6>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Basic Text Settings</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="typography-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <p class="font-weight-regular">Basic text</p>
                <p class="font-weight-light">Basic light text</p>
                <p class="font-weight-medium">Basic medium text</p>
                <p class="font-weight-bold">Basic bold text</p>
                <p class="text-uppercase">Basic Uppercase Text</p>
                <p class="text-lowercase">Basic Lowercase Text</p>
                <p class="text-capitalize">Basic Capitalized Text</p>
                <p class="font-italic">Basic Cursive Text</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Text Size</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="typography-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <p class="text-caption">Heading Typography SM Font Size</p>
                <p class="text-body-1">Heading Typography Regular Font Size</p>
                <p class="text-h5">Heading Typography MD Font Size</p>
                <p class="text-h4">Heading Typography XL Font Size</p>
                <p class="text-h3">Heading Typography XXL Font Size</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Typography',
};
</script>

<style src="./Typography.scss" scoped lang="scss"></style>
