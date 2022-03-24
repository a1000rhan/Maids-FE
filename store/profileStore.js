import { makeAutoObservable } from "mobx";
import api from "./api";

class ProfileStore {
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this, {});
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
profileStore.fetchProfiles();
export default profileStore;
