// Öğrenci bilgilerini dinamik olarak göster
const studentInfo = document.getElementById("student-info");
studentInfo.textContent = "Student: Burak Alay, 200597837";

// Pizza class
class Pizza {
    constructor(customerName, size, crust, toppings, delivery) {
        this.customerName = customerName;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.delivery = delivery;
    }

    describe() {
        return `
            <h2>Sipariş Özeti</h2>
            <p><strong>İsim:</strong> ${this.customerName}</p>
            <p><strong>Boyut:</strong> ${this.size}</p>
            <p><strong>Hamur:</strong> ${this.crust}</p>
            <p><strong>Malzemeler:</strong> ${this.toppings.join(", ") || "Yok"}</p>
            <p><strong>Teslimat:</strong> ${this.delivery}</p>
        `;
    }
}

// Form listener
const form = document.getElementById("pizza-form");
const output = document.getElementById("order-summary");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value;
    const size = form.size.value;
    const crust = form.crust.value;
    const delivery = form.delivery.value;

    const toppings = Array.from(form.querySelectorAll('input[name="toppings"]:checked')).map(input => input.value);

    const myPizza = new Pizza(name, size, crust, toppings, delivery);
    output.innerHTML = myPizza.describe();
});
