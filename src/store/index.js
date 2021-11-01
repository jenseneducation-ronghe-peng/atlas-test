import Vue from "vue";
import Vuex from "vuex";
import { fetchCharacter, fetchEquipments, postPurchases } from "../apiRequests";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fetchStatus: "",
    postStatus: "",
    character: {},
    equipments: [],
    focusItem: null,
    error: null,
  },
  getters: {
    getPostStatus: (state) => {
      return state.postStatus;
    },
    getFocusItem: (state) => {
      return state.focusItem;
    },
  },
  mutations: {
    FETCH_INIT(state) {
      state.fetchStatus = "pending";
    },
    FETCH_CHARACTER_SUCCESS(state, data) {
      state.fetchStatus = "success";
      state.character = data;
    },
    FETCH_EQUIPMENT_SUCCESS(state, data) {
      state.fetchStatus = "success";
      state.equipments = data;
    },
    FETCH_ERROR(state, error) {
      state.fetchStatus = "error";
      state.error = error;
    },
    POST_INIT(state) {
      state.postStatus = "pending";
    },
    POST_SUCCESS(state) {
      state.postStatus = "success";
    },
    POST_ERROR(state, error) {
      state.postStatus = "error";
      state.error = error;
    },
    RESET_PURCHASE(state) {
      state.postStatus = "";
      state.error = null;
    },
    UPDATE_FOCUS_ITEM(state, data) {
      state.focusItem = data;
    },
  },
  actions: {
    async getCharacter({ commit }) {
      commit("FETCH_INIT");
      try {
        const data = await fetchCharacter();
        commit("FETCH_CHARACTER_SUCCESS", data);
      } catch (error) {
        commit("FETCH_ERROR", error);
      }
    },
    async getEquipments({ commit }) {
      commit("FETCH_INIT");
      try {
        const data = await fetchEquipments();
        commit("FETCH_EQUIPMENT_SUCCESS", data);
      } catch (error) {
        commit("FETCH_ERROR", error);
      }
    },
    async buyEquipment({ commit }, id) {
      commit("POST_INIT");
      try {
        const data = { equipmentId: id };
        await postPurchases(data);
        commit("POST_SUCCESS");
        await this.dispatch("getCharacter");
        await this.dispatch("getEquipments");
      } catch (error) {
        commit("POST_ERROR", error);
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
