import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import profileStore from "./profileStore";
import { Toast } from "native-base";

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
    } catch (error) {}
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
    } catch (error) {}
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

  forgotPassword = async (email) => {
    try {
      const resp = await api.put("/user/forgot-password", email);
      Toast.show({
        title: "Link has been sent",
        status: "success",
        description: "Please Check You Email ",
      });
    } catch (error) {
      Toast.show({
        title: "Something went wrong",
        status: "error",
        description: "Please fill in required data",
      });
    }
  };
  resetPassword = async (newPass, resetLink) => {
    try {
      const resp = await api.put("/reset-password", newPass, resetLink);
      Toast.show({
        title: "Your Password has been changed",
        status: "success",
        description: "Please login with your new password ",
      });
    } catch (error) {
      Toast.show({
        title: "Something went wrong",
        status: "error",
        description: "",
      });
    }
  };
}

const userAuthStore = new UserAuthStore();
userAuthStore.checkForToken();
export default userAuthStore;
