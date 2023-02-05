import { For } from "solid-js";
import { Link } from "@solidjs/router";
import { PageData } from "../types/PageData";

import {
  IconSquareRoundedChevronLeft,
  IconSquareRoundedChevronRight,
} from "@tabler/icons-solidjs";

type PaginatorProps = {
  pageData: PageData;
};

const Paginator = ({ pageData }: PaginatorProps) => {
  return (
    <div class="flex items-center justify-center w-full gap-5 p-10">
      <button>
        <Link href={`/${pageData.PreviousPage}`}>
          <IconSquareRoundedChevronLeft />
        </Link>
      </button>
      <For each={Array.from(Array(pageData.TotalPages + 1).keys())}>
        {(page) => (
          <button
            class={
              pageData.CurrentPage === page + 1 ? "font-bold" : "text-gray-500"
            }
          >
            <Link href={`/${page + 1}`}>{page + 1}</Link>
          </button>
        )}
      </For>
      <button>
        <Link href={`/${pageData.NextPage}`}>
          <IconSquareRoundedChevronRight />
        </Link>
      </button>
    </div>
  );
};

export default Paginator;
