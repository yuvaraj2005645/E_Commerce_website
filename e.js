// LOGIN
function signup() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === "" || p === "") {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", u);
    localStorage.setItem("pass", p);
    alert("Signup successful");
}

function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === localStorage.getItem("user") &&
        p === localStorage.getItem("pass")) {
        window.location.href = "Home_page.html";
    } else {
        alert("Wrong username or password");
    }
}

// CART
let count = localStorage.getItem("count") || 0;
let total = localStorage.getItem("total") || 0;

function addToCart(price) {
    count++;
    total = Number(total) + price;

    localStorage.setItem("count", count);
    localStorage.setItem("total", total);

    alert("Added to cart");
}

// PAYMENT
if (document.getElementById("cart")) {
    document.getElementById("cart").innerText = count;
    document.getElementById("total").innerText = total;
}

function pay() {
    if (count == 0) {
        alert("Cart is empty");
    } else {
        alert("Payment Successful (Demo)");
        localStorage.setItem("count", 0);
        localStorage.setItem("total", 0);
        document.getElementById("cart").innerText = 0;
        document.getElementById("total").innerText = 0;
    }
}
