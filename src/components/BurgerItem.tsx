import { Burger } from "../types/Burger";

import defaultBurgerImg from "../assets/burger.png";

type BurgerItemProps = {
  burger: Burger;
};
export default function BurgerItem({ burger }: BurgerItemProps) {
  return (
    <li class="border-2 border-gray-400 w-96 h-72">
      <div class="flex justify-center p-2">
        <div class="flex flex-col items-center flex-1">
          <div class="flex w-5/6 p-5 border-b-2 border-separate border-gray-300">
            <span class="text-3xl font-extrabold">{burger.Name}</span>
          </div>
          <div class="w-5/6 p-5">
            <span>{burger.Brand}</span>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-32 rounded-full">
            <img src={defaultBurgerImg} alt="기본 버거 이미지" />
          </div>
        </div>
      </div>
      <div class="font-serif italic border-t-2 border-gray-400 border-dashed p-7">
        <p>{burger.Description}</p>
      </div>
    </li>
  );
}
