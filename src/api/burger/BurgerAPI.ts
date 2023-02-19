import { AxiosInstance } from "../axiosInstance";
import { Burger } from "../../types/Burger";
import { PageData } from "../../types/PageData";

const BurgerAPI = {
  getAllBurger: async (pageParam: string) =>
    await AxiosInstance.get<{ Burgers: Burger[]; PageData: PageData }>(
      `/burger?page=${pageParam ? pageParam : "0"}`
    ),
  addBurger: async (newBurger: Burger, token: string) => {
    await AxiosInstance.post("/burger", newBurger, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    });
  },
};

export default BurgerAPI;
