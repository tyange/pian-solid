import { For, Show } from "solid-js";
import { Link, useParams } from "@solidjs/router";

import {
  IconSquareRoundedChevronLeft,
  IconSquareRoundedChevronRight,
} from "@tabler/icons-solidjs";

type PaginatorProps = {
  pageNums: number;
};

const Paginator = ({ pageNums }: PaginatorProps) => {
  const params = useParams();

  return (
    <div class="flex items-center justify-center w-full gap-5 p-10">
      <Show when={pageNums <= parseInt(params.id)} keyed={true}>
        <button>
          <Link href={`/${parseInt(params.id) - 1}`}>
            <IconSquareRoundedChevronLeft />
          </Link>
        </button>
      </Show>
      <For each={Array.from(Array(pageNums).keys(), (index) => index + 1)}>
        {(page) => (
          <button
            class={page === parseInt(params.id) ? "font-bold" : "text-gray-500"}
          >
            <Link href={`/${page}`}>{page}</Link>
          </button>
        )}
      </For>
      <Show when={pageNums > parseInt(params.id)} keyed={true}>
        <button>
          <Link href={`/${parseInt(params.id) + 1}`}>
            <IconSquareRoundedChevronRight />
          </Link>
        </button>
      </Show>
    </div>
  );
};

export default Paginator;
