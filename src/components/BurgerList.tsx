import { For } from "solid-js";
import BurgerItem from "./BurgerItem";
import { Burger } from "../types/Burger";

type BurgerListProps = {
  burgers: Burger[];
};

export default function BurgerList({ burgers }: BurgerListProps) {
  return (
    <div class="flex justify-center w-full">
      <ul class="flex flex-col items-center w-5/12 h-full gap-10">
        <For each={burgers}>{(burger) => <BurgerItem burger={burger} />}</For>
      </ul>
    </div>
  );
}
