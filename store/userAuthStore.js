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
  setUser = (token, type) => {
    AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signInUser = async (user, navigation, toast) => {
    try {
      const resp = await api.post("/user/signin", user);

      this.setUser(resp.data.token);
      this.loading = false;
      toast.show({
        title: "Sign in Successfully",
        status: "success",
      });
      navigation.navigate("Maids");
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 25 ~ AuthStore ~ signIn= ~ error",
        error
      );
    }
  };

  signUpUser = async (user, toast, navigation) => {
    try {
      const resp = await api.post("/user/signup", user);
      this.setUser(resp.data.token);
      this.loading = false;
      toast.show({
        title: "Sign in Successfully",
        status: "success",
      });
      navigation.navigate("Maids");
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
