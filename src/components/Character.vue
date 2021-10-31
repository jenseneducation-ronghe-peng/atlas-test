<template>
  <v-card
    class="ma-2 pa-6 flex-column justify-center card"
    style="background: #380000"
  >
    <v-row justify="center" align-content="center">
      <v-icon size="80" color="grey">mdi-account</v-icon>
    </v-row>
    <v-row justify="center" align-content="center">
      <h2>{{ character.name }}</h2>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-icon x-large color="red">mdi-cards-heart</v-icon>
      <v-col cols="9">
        <ProgressBar :number="character.hitPoints" :color="`red`" />
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-icon x-large color="blue">mdi-flash</v-icon>
      <v-col cols="9">
        <ProgressBar :number="character.luck" :color="`blue`" />
      </v-col>
    </v-row>
    <v-row justify="center" align-content="center">
      <v-icon x-large color="secondary">mdi-bitcoin</v-icon>
      <v-col cols="9">
        <h3>{{ character.wealth }}</h3>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "Character",
  components: {
    ProgressBar,
  },
  props: {
    character: Object,
  },
};
</script>

<style scoped>
.card {
  background: #380000;
}
</style>
