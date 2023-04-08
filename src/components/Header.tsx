import { Show } from "solid-js";
import { Link } from "@solidjs/router";

import {
  IconUser,
  IconLogin,
  IconQuestionMark,
  IconSquareRoundedPlus,
} from "@tabler/icons-solidjs";
import logoImg from "../assets/red-x-on-pickle.png";
import createIsAuth from "../store/createAuth";

export default function Header() {
  const { isAuth } = createIsAuth;

  return (
    <header>
      <nav>
        <div>
          <Link href="/">
            <img src={logoImg} alt="로고 이미지" />
          </Link>
        </div>
        <div>
          <ul>
            <Show when={isAuth()} keyed={true}>
              <li>
                <Link href="/add-burger">
                  <IconSquareRoundedPlus stroke="2" size={30} />
                </Link>
              </li>
            </Show>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href={isAuth() ? "/my-page" : "/auth"}>
                <Show
                  when={isAuth()}
                  keyed={true}
                  fallback={<IconLogin stroke="2" size={30} />}
                >
                  <IconUser stroke="2" size={30} />
                </Show>
              </Link>
            </li>
            <li>
              <Link href="/question">
                <IconQuestionMark stroke="2" size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
