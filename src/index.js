import {HomePage} from "./home_page.js";
import {MenuPage} from "./menu_page.js";
import {AboutPage} from "./about_page.js";
import "./styles.css";

let tabs = document.querySelectorAll(".nav-tab");
let activeIdx = 0;

HomePage();
tabs[activeIdx].classList.add("active");

tabs.forEach((currTab, idx) => {
    currTab.addEventListener("click", () => {
        if (activeIdx !== idx) {
            tabs[activeIdx].classList.remove("active");
            currTab.classList.add("active");
            activeIdx = idx;
            document.querySelector("#content").replaceChildren();
            switch(idx){
                case 0:
                    HomePage();
                    break;
                case 1:
                    MenuPage();
                    break;
                case 2:
                    AboutPage();
                    break;
            }
        }
    });
});
