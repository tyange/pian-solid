import { AxiosInstance } from "../axiosInstance";
import { Burger } from "../../types/Burger";
import { PageData } from "../../types/PageData";

const BurgerAPI = {
  getAllBurger: async () =>
    await AxiosInstance.get<{ Burgers: Burger[]; PageData: PageData }>(
      "/burger"
    ),
};

export default BurgerAPI;
