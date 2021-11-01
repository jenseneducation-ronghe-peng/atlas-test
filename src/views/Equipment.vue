<template>
  <v-row class="d-flex justify-center">
    <v-row class="d-flex flex-wrap mt-4" v-if="equipments.length !== 0">
      <v-col cols="12" class="d-flex justify-center">
        <h2>Equipments</h2>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        v-for="(item, i) in equipments"
        v-bind:key="i"
      >
        <EquipmentCard
          v-bind:item="item"
          v-bind:disabled="character.wealth < item.value"
          v-on:check="setFocusItem"
        />
      </v-col>
      <Overlay :focusItem="getFocusItem" />
    </v-row>
    <Loading v-else />
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import EquipmentCard from "../components/EquipmentCard.vue";
import Overlay from "../components/Overlay.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Equipment",

  mounted() {
    if (Object.keys(this.character).length === 0) {
      this.getCharacter();
    }
    if (this.equipments.length === 0) {
      this.getEquipments();
    }
  },
  data() {
    return {
      openCard: null,
      focusItem: null,
    };
  },

  components: {
    EquipmentCard,
    Overlay,
    Loading,
  },
  computed: {
    ...mapState(["equipments", "character"]),
    ...mapGetters(["getFocusItem"]),
  },
  methods: {
    ...mapActions(["getCharacter", "getEquipments", "setFocusItem"]),
  },
};
</script>
