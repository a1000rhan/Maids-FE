import { makeAutoObservable } from "mobx";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class ProfileStore {
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfiles = async () => {
    try {
      const res = await api.get("/profiles");
      this.profiles = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (profile, toast, navigation) => {
    try {
      const formData = new FormData();

      for (const key in profile) formData.append(key, profile[key]);
      console.log(
        "🚀 ~ file: profileStore.js ~ line 28 ~ ProfileStore ~ updateProfile= ~ formData",
        formData
      );

      const res = await api({
        method: "PUT",
        url: "/profiles",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        transformRequest: (data, error) => {
          return formData;
        },
      });

      toast.show({
        title: "Update Successfully",
        status: "success",
      });
      navigation.navigate("Maids");
      this.fetchProfiles();
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Update ",
        status: "error",
      });
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
