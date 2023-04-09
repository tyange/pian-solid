import { createEffect, createSignal, For, Show } from "solid-js";
import { Link, useParams } from "@solidjs/router";

import * as styles from "./Paginator.css";

type PaginatorProps = {
  pageNums: number;
};

const Paginator = ({ pageNums }: PaginatorProps) => {
  const params = useParams();

  const [pageNum, setPageNum] = createSignal(
    params.id ? parseInt(params.id) : 1
  );

  const changePageNumHandler = (currentPageNum: number) => {
    setPageNum(currentPageNum);
  };

  createEffect(() => {
    console.log(pageNum());
  }, [pageNum]);

  return (
    <div class={styles.paginatorWrapper}>
      <Show when={pageNums <= pageNum() && pageNums !== 1} keyed={true}>
        <Link
          class={`${styles.paginatorButton} outline`}
          href={`/${pageNum() - 1}`}
          role="button"
          onClick={() => changePageNumHandler(pageNum() - 1)}
        >
          <i class="fa-solid fa-angle-left"></i>
        </Link>
      </Show>
      <For each={Array.from(Array(pageNums).keys(), (index) => index + 1)}>
        {(page) => (
          <Link
            class={`${styles.paginatorButton} outline ${
              page === pageNum() ? "contrast" : ""
            }`}
            href={`/${page}`}
            role="button"
            onClick={() => changePageNumHandler(page)}
          >
            <span>{page}</span>
          </Link>
        )}
      </For>
      <Show when={pageNums > pageNum()} keyed={true}>
        <Link
          class={`${styles.paginatorButton} outline`}
          href={`/${pageNum() + 1}`}
          role="button"
          onClick={() => changePageNumHandler(pageNum() + 1)}
        >
          <i class="fa-solid fa-angle-right"></i>
        </Link>
      </Show>
    </div>
  );
};

export default Paginator;
