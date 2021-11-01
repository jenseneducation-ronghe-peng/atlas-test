<template>
  <v-overlay v-if="focusItem !== null" :absolute="true" :opacity="0.7">
    <v-card width="320" min-height="250" color="primary">
      <v-row justify="space-between" align="center">
        <v-col cols="12" class="d-flex justify-center">
          <v-card-title class="text-h6" v-text="focusItem.name"></v-card-title>
        </v-col>
        <v-col cols="4" class="d-flex justify-center">
          <v-icon size="60" color="secondary">{{
            typeIcon[focusItem.type]
          }}</v-icon>
        </v-col>
        <v-col cols="8">
          <div>
            <v-card-subtitle>
              <v-icon x-large color="red" class="mx-2">mdi-cards-heart</v-icon>
              <strong>+ {{ focusItem.hpModifier }}</strong>
              <v-icon x-large color="blue" class="mx-2">mdi-flash</v-icon>
              <strong>+ {{ focusItem.luckModifier }}</strong>
              <v-icon x-large color="secondary" class="mx-2"
                >mdi-currency-usd</v-icon
              >
              <strong>- {{ focusItem.value }}</strong>
            </v-card-subtitle>
          </div>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center">
        <v-btn v-on:click="cancel" color="bg" width="150"
          ><span>close</span></v-btn
        >
        <v-btn
          v-if="!character.equipment.includes(focusItem)"
          v-bind:disabled="
            character.wealth < focusItem.value || getPostStatus !== ``
          "
          v-on:click="purchase(focusItem.id)"
          color="blue"
          width="150"
        >
          <span v-if="getPostStatus === `success`">
            <v-icon color="green">mdi-check-bold</v-icon> thanks
          </span>
          <span v-else-if="getPostStatus === `error`">
            <v-icon color="error">mdi-clear-bold</v-icon> please try again
          </span>
          <span v-else-if="getPostStatus === `pending`">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
            waiting
          </span>
          <span
            v-else-if="!character.wealth || character.wealth < focusItem.value"
            >need more coins</span
          >
          <span v-else>buy</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { typeIcon } from "../constants.js";

export default {
  name: "Overlay",
  props: {
    focusItem: Object,
  },
  data() {
    return {
      typeIcon: typeIcon,
    };
  },
  computed: {
    ...mapState(["equipments", "character"]),
    ...mapGetters(["getPostStatus"]),
  },
  methods: {
    ...mapActions([
      "getCharacter",
      "getEquipments",
      "buyEquipment",
      "cancelPurchase",
      "setFocusItem",
    ]),
    cancel() {
      this.setFocusItem(null);
      this.cancelPurchase();
    },
    purchase(id) {
      const purchaseEquipment = this.equipments.find((item) => item.id === id);
      if (
        this.character.wealth &&
        purchaseEquipment.value <= this.character.wealth
      ) {
        this.buyEquipment(id);
      }
    },
  },
};
</script>
