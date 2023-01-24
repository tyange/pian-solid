import logoImg from "../assets/red-x-on-pickle.png";

export default function Header() {
  return (
    <header class="flex justify-center py-10">
      <nav class="w-9/12 grid grid-cols-5 items-center">
        <div class="w-20">
          <img class="w-full" src={logoImg} alt="pian 로고" />
        </div>
        <div>
          <ul class="flex gap-5">
            <li>공지</li>
            <li>버거들</li>
          </ul>
        </div>
        <div class="col-span-3 justify-self-end mr-10">
          <ul class="flex gap-3">
            <li>github</li>
            <li>QM</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
