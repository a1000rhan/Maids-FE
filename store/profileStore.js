import { makeAutoObservable } from "mobx";
import api from "./api";
import maidAuthStore from "./maidAuthStore";

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

  updateProfile = async (profile, toast, navigation) => {
    console.log(
      "🚀 ~ file: profileStore.js ~ line 24 ~ ProfileStore ~ updateProfile= ~ profile",
      profile
    );
    try {
      const formData = new FormData();

      for (const key in profile) formData.append(key, profile[key]);
      console.log(formData);
      const res = await api({
        method: "PUT",
        url: "/profiles",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        transformRequest: (data, error) => {
          return formData;
        },
      });
      maidAuthStore.profile = res.data;
      const tempArr = this.profiles.filter((profile) =>
        profile._id === res.data._id ? res.data : profile
      );
      this.profiles = tempArr;

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
profileStore.fetchProfiles();
export default profileStore;
