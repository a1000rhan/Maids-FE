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

  signInMaid = async (maid, navigation, toast) => {
    try {
      const resp = await api.post("/maid/signin", maid);
      this.setMaid(resp.data.token);
      toast.show({
        title: "Sign in Successfully",
        status: "success",
      });
      navigation.navigate("Maids");
    } catch (error) {
      console.log(error);
    }
  };

  signUpMaid = async (maid, toast, navigation) => {
    console.log(
      "🚀 ~ file: maidAuthStore.js ~ line 38 ~ MaidAuthStore ~ signUpMaid= ~ maid",
      maid
    );
    try {
      const res = await api.post("/maid/signup", maid);
      this.setMaid(res.data.token);
      toast.show({
        title: "Sign in Successfully",
        status: "success",
      });
      navigation.navigate("NameSignUpMaid");
    } catch (error) {
      toast.show({
        title: "Couldn't Sign up",
        status: "error",
      });
      console.log(error);
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
