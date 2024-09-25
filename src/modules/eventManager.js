class EventsManager {
 container = document.querySelector("main");

 bindEvents() {
    this.container.addEventListener("click",(e) => {
        if(e.target.classList.contains("heading")) {
            const task = e.target.closest(".heading").getAttribute("data-key")
            
        }
    })
 }
}

export default new EventsManager();