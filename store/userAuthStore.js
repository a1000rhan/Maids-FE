import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import profileStore from "./profileStore";

class UserAuthStore {
  user = null;
  loading = true;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = (token) => {
    AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

<<<<<<< HEAD:store/userAuthStore.js
  signInUser = async (user) => {
    try {
      const resp = await api.post("/signinUser", user);
=======
  signIn = async (user,navigation) => {
    console.log("🚀 ~ file: authStore.js ~ line 21 ~ AuthStore ~ signIn= ~ navigation", navigation)
    try {
      const resp = await api.post("/Signin", user);
      console.log("🚀 ~ file: authStore.js ~ line 23 ~ AuthStore ~ signIn= ~ resp", resp.data)
      
>>>>>>> 296b802e3a63cca3a34987765705441a31d1a7f7:authStore.js
      this.setUser(resp.data.token);
      this.loading=false;
      navigation.navigate("Maids")
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 25 ~ AuthStore ~ signIn= ~ error",
        error
      );
    }
  };

  signUpUser = async (user) => {
    try {
      const resp = await api.post("/signupUser", user);
      this.setUser(resp.data.token);
      this.loading=false;
      navigation.navigate("Maids")
      await profileStore.assignProfileToUser();
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 37 ~ AuthStore ~ signUp= ~ error",
        error
      );
    }
  };
  signOut = async () => {
    delete api.defaults.headers.common.Authorization;
    this.user = null;
    await AsyncStorage.removeItem("myToken");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const exp = decode(token).exp;
      if (exp > currentTime) {
        this.setUser(token);
      } else {
        this.signOut();
      }
    } else {
      this.signOut();
    }
  };
}

const userAuthStore = new UserAuthStore();
userAuthStore.checkForToken();
export default userAuthStore;
