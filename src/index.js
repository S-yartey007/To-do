import "./style.css";
import reservationPage from "./modules/reservation.js";
import homePage from "./modules/homepage.js";
import menuPage from "./modules/menu.js";
const container = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const reserveBtn = document.querySelector(".reserveBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const contactBtn = document.querySelector(".contactBtn");
const orderBtn = document.querySelector(".orderBtn");
const menuBtn = document.querySelector(".menuBtn")
class Restaurant {
    constructor() {
        container.appendChild(homePage.container);
        this.bindEvents();
    }
    bindEvents() {
        homeBtn.addEventListener("click",this.handleHome);
        menuBtn.addEventListener("click",this.handleMenu)
        reserveBtn.addEventListener("click",this.handleReseve);
        aboutBtn.addEventListener("click",this.handleAbout);
        contactBtn.addEventListener("click",this.handleContact);
        orderBtn.addEventListener("click",this.handleOrer);

    }
    handleHome() {
        container.replaceChildren();
        container.appendChild(homePage.container);
    }
    handleMenu() {
        container.replaceChildren();
        container.appendChild(menuPage.container);
    }
    handleAbout() {
        container.replaceChildren();
        container.appendChild(aboutPage.container);

    }
    handleContact() {
        container.replaceChildren();
        container.appendChild(contactPage.container);

    }
    handleOrer() {
        container.replaceChildren();
        container.appendChild(orderPage.container);

    }
    handleReseve() {
        container.replaceChildren();
        container.appendChild(reservationPage.header);
        container.appendChild(reservationPage.form);
    }
}

const restaurant = new Restaurant();