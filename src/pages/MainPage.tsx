import { createResource, Show } from "solid-js";

import BurgerAPI from "../api/burger/BurgerAPI";
import Layout from "../components/Layout";
import BurgerList from "../components/BurgerList";
import { Burger } from "../types/Burger";
import { PageData } from "../types/PageData";

export default function MainPage() {
  const [burgersData] = createResource<{
    Burgers: Burger[];
    PageData: PageData;
  }>(async () => {
    const res = await BurgerAPI.getAllBurger();

    return res.data;
  });

  return (
    <Layout>
      <Show when={burgersData()} keyed={true}>
        {(burgersData) => <BurgerList burgers={burgersData.Burgers} />}
      </Show>
    </Layout>
  );
}
