import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

async function fetchCharacter() {
  const resp = await API.get("/character");
  const character = { ...resp.data };
  const equipment = character.equipment;
  if (equipment.length !== 0) {
    let hp = character.hitPoints;
    let luck = character.luck;
    equipment.forEach((item) => {
      hp += item.hpModifier;
      luck += item.luckModifier;
    });
    character.hitPoints = hp;
    character.luck = luck;
  }
  return character;
}

async function fetchEquipments() {
  const resp = await API.get("/equipment");
  return resp.data;
}
async function postPurchases(data) {
  const resp = await API.post("/purchases", data);
  return resp.data;
}
export { fetchCharacter, fetchEquipments, postPurchases };
