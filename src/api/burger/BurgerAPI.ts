import { AxiosInstance } from "../axiosInstance";
import { Burger } from "../../types/Burger";
import { PageData } from "../../types/PageData";

const BurgerAPI = {
  getAllBurger: async (pageParam: string) =>
    await AxiosInstance.get<{ Burgers: Burger[]; PageData: PageData }>(
      `/burger?page=${pageParam ? pageParam : "0"}`
    ),
};

export default BurgerAPI;
