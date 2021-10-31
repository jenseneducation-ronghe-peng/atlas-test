import Vue from "vue";
import Vuex from "vuex";
import { fetchCharacter, fetchEquipments, postPurchases } from "../apiRequests";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    character: {},
    equipments: [],
    focusItem: null,
    error: null,
  },
  getters: {
    getStatus: (state) => {
      return state.status;
    },
    getFocusItem: (state) => {
      return state.focusItem;
    },
  },
  mutations: {
    INIT(state) {
      state.status = "pending";
    },
    SAVE_CHARACTER(state, data) {
      state.character = data;
    },
    SAVE_EQUIPMENT(state, data) {
      state.equipments = data;
    },
    POST_EQUIPMENT(state) {
      state.status = "success";
    },
    SAVE_ERROR(state, error) {
      state.status = "error";
      state.error = error;
    },
    RESET_PURCHASE(state) {
      state.status = "";
      state.error = null;
    },
    UPDATE_FOCUS_ITEM(state, data) {
      state.focusItem = data;
    },
  },
  actions: {
    async getCharacter({ commit }) {
      try {
        const data = await fetchCharacter();
        commit("SAVE_CHARACTER", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getEquipments({ commit }) {
      try {
        const data = await fetchEquipments();
        commit("SAVE_EQUIPMENT", data);
      } catch (error) {
        console.log(error);
      }
    },
    async buyEquipment({ commit }, id) {
      commit("INIT");
      try {
        const data = { equipmentId: id };
        await postPurchases(/* id */ data);
        commit("POST_EQUIPMENT" /* , id*/);
        await this.dispatch("getCharacter");
        await this.dispatch("getEquipments");
      } catch (error) {
        commit("SAVE_ERROR", error);
      }
    },
    cancelPurchase({ commit }) {
      commit("RESET_PURCHASE");
    },
    setFocusItem({ commit }, data) {
      commit("UPDATE_FOCUS_ITEM", data);
    },
  },
  modules: {},
});
