import { createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";

import BurgerAPI from "../../../api/burger/BurgerAPI";
import { getAuth, signOut, getIdToken } from "firebase/auth";

import createAuth from "../../../store/createAuth";

import * as styles from "./BurgerForm.css";

export default function BurgerForm() {
  const navigate = useNavigate();

  const { onInitIsAuth } = createAuth;

  const [burgerName, setBurgerName] = createSignal("");
  const [burgerBrand, setBurgerBrand] = createSignal("mc");
  const [burgerDescription, setBurgerDescription] = createSignal("");

  const burgerBrands = [
    { label: "맥도날드", value: "mc" },
    { label: "버거킹", value: "bk" },
    { label: "KFC", value: "kfc" },
    { label: "롯데리아", value: "lot" },
  ];

  const onSubmitFormHandler = async (e: Event) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }

    const newBurger = {
      name: burgerName(),
      brand: burgerBrand(),
      description: burgerDescription(),
      userId: userId,
    };

    const currentAuth = await getAuth();

    if (!currentAuth.currentUser) {
      await signOut(currentAuth);
      onInitIsAuth();

      navigate("/");

      return;
    }

    const idToken = await getIdToken(currentAuth.currentUser);

    try {
      await BurgerAPI.addBurger(newBurger, idToken);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class={styles.formContainer}>
      <div>
        <h4>햄버거 추가하기</h4>
      </div>
      <form onSubmit={onSubmitFormHandler}>
        <div>
          <label>버거 이름:</label>
          <input
            onInput={(e) => setBurgerName(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div>
          <label>브랜드:</label>
          <select
            onSelect={(e) => setBurgerBrand(e.currentTarget.value)}
            value={burgerBrand()}
          >
            <For each={burgerBrands}>
              {(burgerBrand) => (
                <option value={burgerBrand.value}>{burgerBrand.label}</option>
              )}
            </For>
          </select>
        </div>
        <div>
          <label>이 버거를 설명해주세요:</label>
          <textarea
            onChange={(e) => setBurgerDescription(e.currentTarget.value)}
          />
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
