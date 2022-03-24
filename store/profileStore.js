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

  updateProfile = async (profile, navigation) => {
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
      navigation.navigate("Maids");
    } catch (error) {
      console.log(error);
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
