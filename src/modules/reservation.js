class Reservation {
    header = document.createElement("h1");
    form = document.createElement("form");
    ldate = document.createElement("label");
    ltime = document.createElement("label");
    lsize = document.createElement("label");
    date = document.createElement("input");
    time = document.createElement("input");
    size = document.createElement("input");
    contact = document.createElement("p");
    request = document.createElement("textarea");
    lrequest = document.createElement("label")

    constructor() {
        this.header.textContent = "reseve now"
        this.date.setAttribute("type","date");
        this.time.setAttribute("type","time");
        this.size.setAttribute("type","number");
        this.form.appendChild(this.ldate);
        this.form.appendChild(this.date);
        this.form.appendChild(this.ltime);
        this.form.appendChild(this.time);
        this.form.appendChild(this.lsize);
        this.form.appendChild(this.size);
        this.form.appendChild(this.lrequest);
        this.form.appendChild(this.request);
    }
}

const reservation = new Reservation();
reservation.ldate.textContent = "Choose date"
reservation.ltime.textContent = "Choose time"
reservation.lsize.textContent = "Choose size"
reservation.lrequest.textContent = "make request"

export default reservation;