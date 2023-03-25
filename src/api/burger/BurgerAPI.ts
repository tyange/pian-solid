import { AxiosInstance } from "../axiosInstance";
import { Burger } from "../../types/Burger";

const BurgerAPI = {
  getAllBurger: async (pageParam: string) =>
    await AxiosInstance.get<{ data: Burger[] }>(
      `/burger?page=${pageParam ? pageParam : "1"}`
    ),
  getBurgerCounts: async () =>
    await AxiosInstance.get<{ data: { counts: number } }>(`/burger/counts`),
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
