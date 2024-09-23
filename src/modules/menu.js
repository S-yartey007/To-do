import food1 from "../images/food4.jpg"
const dishes = [
    {
      name: "Margherita Pizza",
      description: "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
      price: 12.99,
      imageUrl: food1
    },
    {
      name: "Spaghetti Carbonara",
      description: "Traditional Italian pasta with pancetta, parmesan, and creamy egg sauce.",
      price: 14.50,
      imageUrl: food1
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.",
      price: 9.99,
      imageUrl: food1
    },
    {
      name: "Grilled Salmon",
      description: "Freshly grilled salmon served with roasted vegetables and a lemon butter sauce.",
      price: 18.99,
      imageUrl: food1
    },
    {
      name: "Chicken Tikka Masala",
      description: "Tender chicken in a spiced tomato and cream sauce, served with basmati rice.",
      price: 15.99,
      imageUrl: food1
    },
    {
      name: "Chocolate Lava Cake",
      description: "Rich chocolate cake with a molten center, served with vanilla ice cream.",
      price: 7.50,
      imageUrl: food1
    },
    {
      name: "Sushi Platter",
      description: "An assortment of fresh sushi including nigiri, sashimi, and maki rolls.",
      price: 22.99,
      imageUrl: food1
    },
    {
      name: "Beef Tacos",
      description: "Three soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
      price: 11.75,
      imageUrl: food1
    },
    {
      name: "Vegetable Stir-Fry",
      description: "A medley of fresh vegetables stir-fried in a savory soy sauce, served with rice.",
      price: 12.25,
      imageUrl: food1
    },
    {
      name: "Lobster Bisque",
      description: "Creamy lobster soup with a rich, flavorful broth.",
      price: 16.99,
      imageUrl: food1
    }
  ];

class Dish {
    dish = document.createElement("div");
    constructor(name,description,price,imageUrl) {
        
        const nameElem = document.createElement("p");
        nameElem.textContent = name
        const descriptionElem = document.createElement("p");
        descriptionElem.textContent = description;
        const priceElem = document.createElement("p");
        priceElem.textContent = price;
        const imgElem = document.createElement("img");
        imgElem.src = imageUrl;
        [nameElem,descriptionElem,priceElem,imgElem].forEach(item => this.dish.appendChild(item))
        

    }
}
  
class MenuPage {
    container = document.createElement("div");
    categories = document.createElement("div");
    appetizers = document.createElement("p");
    entries = document.createElement("p");
    beverages = document.createElement("p");

    constructor() {
        this.container.appendChild(this.categories);
        this.container.classList.add("m-container");
        this.appetizers.classList.add("appetizers");
        this.entries.classList.add("entries");
        this.beverages.classList.add("beverages");
        [this.appetizers,this.entries,this.beverages].forEach(item => this.categories.appendChild(item))
        this.createDishes()
    }
    createDishes() {
        dishes.forEach(dish => {
            const {name,description,price,imageUrl} = dish;
            const dishObj = new Dish(name,description,price,imageUrl)
            this.container.appendChild(dishObj.dish)
        })
    }
}


const menuPage = new MenuPage();

export default menuPage;