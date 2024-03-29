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

  const fetchPageCounts = async () => {
    try {
      const res = await BurgerAPI.getBurgerCounts();

      return res.data;
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  const [pageCounts] = createResource(fetchPageCounts);

  return (
    <Layout>
      <Show when={burgersData()} keyed={true}>
        {(burgersData) => (
          <>
            <BurgerList burgers={burgersData.data} />
          </>
        )}
      </Show>
      <Show when={pageCounts()} keyed={true}>
        {(pageCounts) => (
          <Paginator pageNums={Math.trunc(pageCounts.data.counts / 6 + 1)} />
        )}
      </Show>
    </Layout>
  );
}
