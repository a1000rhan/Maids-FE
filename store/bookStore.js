import { makeAutoObservable } from "mobx";
import api from "./api";
class BookStore {
  bookings = [];
  // loading = true;

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchUserBookings = async () => {
    try {
      const res = await api.get("/userbookings");
      this.bookings = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  fetchMaidBookings = async () => {
    try {
      const res = await api.get("/maidbookings");
      this.bookings = res.data;
      console.log(this.bookings);
    } catch (error) {
      console.log(error);
    }
  };
}

const bookStore = new BookStore();
export default bookStore;
