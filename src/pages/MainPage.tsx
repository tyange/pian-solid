import { createResource, createSignal, Show } from "solid-js";

import BurgerAPI from "../api/burger/BurgerAPI";
import Layout from "../components/Layout";
import BurgerList from "../components/BurgerList";
import Paginator from "../components/Paginator";
import { useParams } from "@solidjs/router";

export default function MainPage() {
  const params = useParams();
  // TODO 에러 페이지 만들기
  const [isError, setIsError] = createSignal(false);

  const fetchBurgers = async (id: string) => {
    try {
      const res = await BurgerAPI.getAllBurger(id);

      return res.data;
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  const [burgersData] = createResource(
    () => (params.id ? params.id : "1"),
    fetchBurgers
  );

  return (
    <Layout>
      <Show when={burgersData()} keyed={true}>
        {(burgersData) => (
          <>
            <BurgerList burgers={burgersData.Burgers} />
            <Paginator pageData={burgersData.PageData} />
          </>
        )}
      </Show>
    </Layout>
  );
}
