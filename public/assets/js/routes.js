// variables

var storeButton = $("#storeButton");
var homepageButton = $("#brand");
var logoutButton = $("#logout");
var studentStore = $("#store");
var logoutButton = $("#logout");
var addCart50 = $("#package1");
var addCart250 = $("#package2");
var addCart500 = $("#package3");
var addCart900 = $("#package4");
var cartDiv = $("#cartDiv");
var cart1 = $("#cart1");
var totalDiv = $("#totalDiv");
let total = 0;
var shoppingCart = $("#shoppingCart");


// functions

function goToStore() {
    $.get("../views/store.html").then(window.location.replace("/store"))
};

function goToHomepage() {
    $.get("../views/index.html").then(window.location.replace("/"))
};
function logout() {
    $.get("/logout");
};

function addToCart50() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>`)
    totalDiv.html(total + 1 + " hour" + `<br>` + "$50.00" + `<br>` + `<br>` + `<button class="btn btn-primary" type="button">Checkout</button>`);
}

function addToCart250() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>`)
    totalDiv.html(total + 5 + " hours" + `<br>` + "$250.00" + `<br>` + `<br>` + `<button class="btn btn-primary" type="button">Checkout</button>`);
}

function addToCart500() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>`)
    totalDiv.html(total + 10 + " hours" + `<br>` + "$500.00" + `<br>` + `<br>` + `<button class="btn btn-primary" type="button">Checkout</button>`);
}

function addToCart900() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>`)
    totalDiv.html(total + 18 + " hours" + `<br>` + "$900.00" + `<br>` + `<br>` + `<button class="btn btn-primary" type="button">Checkout</button>`);
}

// event handlers

storeButton.on("click", goToStore);
homepageButton.on("click", goToHomepage);
logoutButton.on("click", goToHomepage);
studentStore.on("click", goToStore);
addCart50.on("click", addToCart50);
addCart250.on("click", addToCart250);
addCart500.on("click", addToCart500);
addCart900.on("click", addToCart900);