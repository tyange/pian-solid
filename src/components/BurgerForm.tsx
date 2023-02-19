import { createSignal, For } from "solid-js";

export default function BurgerForm() {
  const [burgerName, setBurgerName] = createSignal("");
  const [burgerBrand, setBurgerBrand] = createSignal("");
  const [burgerDescription, setBurgerDescription] = createSignal("");

  const burgerBrands = [
    { label: "맥도날드", value: "mc" },
    { label: "버거킹", value: "bk" },
    { label: "KFC", value: "kfc" },
    { label: "롯데리아", value: "lot" },
  ];

  const onSubmitFormHandler = (e: Event) => {
    e.preventDefault();

    const newBurger = {
      name: burgerName(),
      brand: burgerBrand(),
      description: burgerDescription(),
    };

    console.log(newBurger);
  };

  return (
    <div class="w-1/3">
      <div class="mb-20">
        <h4>햄버거 추가하기</h4>
      </div>
      <form onSubmit={onSubmitFormHandler}>
        <div class="flex flex-col gap-2 w-1/2">
          <label class="text-sm">버거 이름:</label>
          <input
            onInput={(e) => setBurgerName(e.currentTarget.value)}
            type="text"
            class="border rounded-md"
          />
        </div>
        <div class="flex flex-col gap-2 w-1/2">
          <label class="text-sm">브랜드:</label>
          <select
            class="border rounded-md"
            onSelect={(e) => setBurgerBrand(e.currentTarget.value)}
          >
            <For each={burgerBrands}>
              {(burgerBrand) => (
                <option value={burgerBrand.value}>{burgerBrand.label}</option>
              )}
            </For>
          </select>
        </div>
        <div class="flex flex-col gap-2 mt-10">
          <label class="text-sm">이 버거를 설명해주세요:</label>
          <textarea
            onChange={(e) => setBurgerDescription(e.currentTarget.value)}
            class="border rounded-md h-80"
          />
        </div>
        <div>
          <button class="w-full border-2 mt-10 rounded-lg px-12">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
