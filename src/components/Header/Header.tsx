import { Show } from "solid-js";
import { Link } from "@solidjs/router";

import * as styles from "./Header.css";

import logoImg from "../../assets/red-x-on-pickle.png";
import createAuth from "../../store/createAuth";

export default function Header() {
  const { isAuth } = createAuth;

  return (
    <header class="container">
      <nav class={styles.nav}>
        <div>
          <ul>
            <li>
              <div class={styles.logoImgContainer}>
                <Link class={styles.link} href="/">
                  <img src={logoImg} alt="로고 이미지" />
                </Link>
              </div>
            </li>
            <Show when={isAuth()} keyed={true}>
              <li>
                <Link
                  class={`${styles.link} add-burger outline contrast`}
                  href="/add-burger"
                  role="button"
                >
                  <span>버거 추가하기</span>
                  <i class="fa-solid fa-plus"></i>
                </Link>
              </li>
            </Show>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link class={styles.link} href={isAuth() ? "/my-page" : "/auth"}>
                <Show
                  when={isAuth()}
                  keyed={true}
                  fallback={<i class="fa-solid fa-right-to-bracket"></i>}
                >
                  <i class="fa-regular fa-user"></i>
                </Show>
              </Link>
            </li>
            <li>
              <Link class={styles.link} href="/question">
                <i class="fa-solid fa-question"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
