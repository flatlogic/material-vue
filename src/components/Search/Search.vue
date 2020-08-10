<template>
  <form action="#">
    <label :data-state="state">
      <input type="text" placeholder="Search" @click="state = 'open'" @blur="state='close'"/>
      <v-icon :color="config.light.iconColor" size="28">mdi-magnify</v-icon>
    </label>
  </form>
</template>

<script>
import config from '../../config';

export default {
  name: 'Search',
  data(){
    return {
      config,
      state: "close"
    }
  },
}

</script>

<style src="./Search.scss" lang="scss"></style>


