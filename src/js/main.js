import "./lib/twoLodash";

import { setupCounter } from "./modules/counter";

import viteLogo from "../assets/img/vite.svg";
import javascriptLogo from "../assets/img/javascript.svg";

import "../scss/style.scss";

const header = __(".header__inner");
header[0].classList.add("flex-all-center");
header[0].innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
`;
setupCounter(__("#counter")[0]);

__("div").show();
