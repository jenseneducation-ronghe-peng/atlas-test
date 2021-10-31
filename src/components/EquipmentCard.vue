<template>
  <v-card
    class="card d-flex justify-center align-center pa-4"
    height="300px"
    max-width="400px"
    v-on:click="$emit('check', item)"
  >
    <v-card-text v-if="item" class="d-flex justify-center">
      <v-row justify="center" align="center" class="my-8">
        <v-col cols="12" class="d-flex justify-center my-4">
          <h2>{{ item.name }}</h2>
        </v-col>
        <div class="mx-8">
          <v-icon x-large color="secondary">{{ typeIcon[item.type] }}</v-icon>
          <h3>{{ item.type }}</h3>
        </div>
        <div class="mx-8">
          <v-icon x-large color="secondary">mdi-currency-usd</v-icon>
          <h3>- {{ item.value }}</h3>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { typeIcon } from "../constants.js";
export default {
  name: "EquipmentCard",
  data() {
    return {
      typeIcon: typeIcon,
    };
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.card {
  background: #380000;
  cursor: pointer;
}
</style>
