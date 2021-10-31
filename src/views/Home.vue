<template>
  <v-row justify="center">
    <v-row justify="center" v-if="Object.keys(character).length !== 0">
      <v-col cols="12" class="d-flex justify-center mt-12">
        <h1>TREATURE HUNTER</h1>
      </v-col>
      <v-col cols="12" sm="10" md="8" lg="8">
        <Character v-bind:character="character" />
        <v-row
          class="d-flex flex-row-wrap"
          v-if="character.equipment && character.equipment.length !== 0"
        >
          <v-col cols="12">
            <v-row class="my-6" align="center" justify="center" dense>
              <h3>Your Equipments</h3>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            v-for="(item, i) in character.equipment"
            v-bind:key="i"
          >
            <EquipmentCard v-bind:item="item" v-on:check="setFocusItem" />
          </v-col>
        </v-row>
      </v-col>
      <Overlay :focusItem="getFocusItem" />
    </v-row>
    <Loading v-else />
  </v-row>
</template>

<script>
import Character from "../components/Character.vue";
import EquipmentCard from "../components/EquipmentCard.vue";
import Overlay from "../components/Overlay.vue";
import Loading from "../components/Loading.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Character,
    EquipmentCard,
    Overlay,
    Loading,
  },
  computed: {
    ...mapState(["character"]),
    ...mapGetters(["getFocusItem"]),
  },
  methods: {
    ...mapActions(["getCharacter", "setFocusItem"]),
  },
  mounted() {
    if (Object.keys(this.character).length === 0) {
      this.getCharacter();
    }
  },
};
</script>
