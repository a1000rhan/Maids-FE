import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import profileStore from "./profileStore";

class MaidAuthStore {
  maid = null;
  // loading = true;

  constructor() {
    makeAutoObservable(this, {});
  }
  setMaid = (token) => {
    AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.maid = decode(token);
  };

  signInMaid = async (maid) => {
    try {
      const resp = await api.post("/maid/signin", maid);
      this.setMaid(resp.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 25 ~ AuthStore ~ signIn= ~ error",
        error
      );
    }
  };

  signUpMaid = async (maid) => {
    try {
      const res = await api("maid/signup", maid);
      this.setMaid(resp.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 37 ~ AuthStore ~ signUp= ~ error",
        error
      );
    }
  };
  signOut = async () => {
    delete api.defaults.headers.common.Authorization;
    this.maid = null;
    await AsyncStorage.removeItem("myToken");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const exp = decode(token).exp;
      if (exp > currentTime) {
        this.setMaid(token);
      } else {
        this.signOut();
      }
    } else {
      this.signOut();
    }
  };
}

const maidAuthStore = new MaidAuthStore();
maidAuthStore.checkForToken();
export default maidAuthStore;
