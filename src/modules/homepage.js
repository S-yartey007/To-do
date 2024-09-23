import food1 from '../images/food1.jpg';
import food2 from "../images/food2.jpg"
class Homepage{
    container = document.createElement("div");
    hero = document.createElement("div");
    CTA = document.createElement("ul");
    featuredDishes = document.createElement("div");
    HoursOP = document.createElement("div");
    location = document.createElement("div");
    review = document.createElement("p");

    constructor() {
        const heroImage = document.createElement("img");
        const heroText = document.createElement("p");
        [heroImage,heroText].forEach(hero => this.hero.appendChild(hero));

        const CTA_menu = document.createElement("a");
        const CTA_order = document.createElement("a");
        const CTA_reserve = document.createElement("a");
        [CTA_menu,CTA_order,CTA_reserve].forEach(CTA => {
            this.CTA.appendChild(CTA);
        })

        const description = document.createElement("p");
        const dishImage = document.createElement("img");
        [description,dishImage].forEach(dish => {
            this.featuredDishes.appendChild(dish);
        })
        const locationInfo = document.createElement("p")
        this.location.appendChild(locationInfo);

        const hoursOPInfo = document.createElement("p");
        this.HoursOP.appendChild(hoursOPInfo)
        this.render();
        this.asignClasses();
    };

    render() {
      Object.keys(this).forEach(key => {
        if(this[key] !== this.container) {
          this.container.appendChild(this[key]);
        }
      })     
    }
    asignClasses() {
        Object.keys(this).forEach(key => {
            this[key].classList.add("H-"+key)
        }) 
    }
    
}

const homepage = new Homepage();
homepage.hero.querySelector("img").src = food1;
homepage.hero.querySelector("p").textContent = "Enjoy your delicious food here"
homepage.CTA.querySelector(":nth-child(1)").textContent = "do you want to see our menu"
homepage.CTA.querySelector(":nth-child(2)").textContent = "make a reservation"
homepage.CTA.querySelector(":nth-child(3)").textContent = "Oder your delicious meal"
homepage.featuredDishes.querySelector("img").src = food2
homepage.featuredDishes.querySelector("p").textContent = "have a taste of this exquisite meal"
homepage.HoursOP.querySelector("p").textContent = "We work all days - 24/7"
homepage.location.querySelector("p").textContent = "Find our location at this area"
homepage.review.textContent = "These are our customers who enjoyed our products"
export default homepage;