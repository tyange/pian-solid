import { Link } from "@solidjs/router";

import { IconUser, IconLogin, IconQuestionMark } from "@tabler/icons-solidjs";
import logoImg from "../assets/red-x-on-pickle.png";

export default function Header() {
  return (
    <header class="flex justify-center py-10">
      <nav class="grid items-center w-5/12 grid-cols-5">
        <div class="w-20">
          <Link href="/">
            <img src={logoImg} alt="로고 이미지" />
          </Link>
        </div>
        <div>
          <ul class="flex gap-5"></ul>
        </div>
        <div class="col-span-3 mr-10 justify-self-end">
          <ul class="flex gap-4">
            <li>
              <Link href="/auth">
                <IconLogin stroke="2" size={30} />
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
