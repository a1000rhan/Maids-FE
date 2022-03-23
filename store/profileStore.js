import { makeAutoObservable } from "mobx";
import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class ProfileStore {
  profiles = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfiles = async () => {
    const res = await api.get("/profiles");
  };

  updateProfile = async (profile) => {
    try {
      const formData = new FormData();

      for (const key in profile) formData.append(key, profile[key]);

      const res = await api({
        method: "PUT",
        url: "/profiles",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        transformRequest: (data, error) => {
          return formData;
        },
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 37 ~ AuthStore ~ signUp= ~ error",
        error
      );
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
