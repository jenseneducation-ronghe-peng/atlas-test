<template>
  <v-progress-linear :color="color" height="25" :value="number">
    <template v-slot:default="{ value }">
      <strong class="strong">{{ value }}</strong>
    </template>
  </v-progress-linear>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    number: Number,
    color: String,
  },
};
</script>

<style lang="sass" scoped>
@import ../sass/index.sass
.strong
  color: $lgtgrey
</style>
