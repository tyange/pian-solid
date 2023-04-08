import { createSignal, For, Show } from "solid-js";
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

  const [pageNum] = createSignal(params.id ? parseInt(params.id) : 1);

  return (
    <div>
      <Show when={pageNums <= pageNum()} keyed={true}>
        <button>
          <Link href={`/${pageNum() - 1}`}>
            <IconSquareRoundedChevronLeft />
          </Link>
        </button>
      </Show>
      <For each={Array.from(Array(pageNums).keys(), (index) => index + 1)}>
        {(page) => (
          <button>
            <Link href={`/${page}`}>{page}</Link>
          </button>
        )}
      </For>
      <Show when={pageNums > pageNum()} keyed={true}>
        <button>
          <Link href={`/${pageNum() + 1}`}>
            <IconSquareRoundedChevronRight />
          </Link>
        </button>
      </Show>
    </div>
  );
};

export default Paginator;
