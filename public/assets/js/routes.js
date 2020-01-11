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
    console.log(" go to store")
    $.get("../views/store.html").then(window.location.replace("/store"))
};

function goToHomepage() {
    $.get("../views/index.html").then(window.location.replace("/"))
};

function addToCart50() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>` + `<hr>`)
    totalDiv.html(total + 1 + " hour" + `<br>` + "$50.00" + `<br>` + `<br>` + `<button id="checkout50" class="btn btn-primary" type="button">Checkout</button>`);
    var checkout50 = $("#checkout50");
    checkout50.on("click", goToStudent);

    function goToStudent() {
        console.log("student route")
        $.get("../views/student.html").then(window.location.replace("/student"))
    };
}

function addToCart250() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>` + `<hr>`)
    totalDiv.html(total + 5 + " hours" + `<br>` + "$250.00" + `<br>` + `<br>` + `<button id="checkout250" class="btn btn-primary" type="button">Checkout</button>`);
    var checkout250 = $("#checkout250");
    checkout250.on("click", goToStudent);

    function goToStudent() {
        console.log("student route")
        $.get("../views/student.html").then(window.location.replace("/student"))
    };
}

function addToCart500() {
    var hours = 10;
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>` + `<hr>`)
    totalDiv.html(total + 10 + " hours" + `<br>` + "$500.00" + `<br>` + `<br>` + `<button id="checkout500" class="btn btn-primary" type="button">Checkout</button>`);
    var checkout500 = $("#checkout500");
    checkout500.on("click", goToStudent);

    function goToStudent() {
        console.log("student route")
        $.get("api/user/").then(function(response) {
            console.log("updating hours")
            $.put("/api/student_hours", { id: response.id, hours: response.hours + hours }).then($.get("../views/student.html").then(window.location.replace("/student")))
        });
    };

    //     function updateHours() {
    //         console.log("updated hours")
    //         $.update("/api/student_hours", { id: req.user.id, hours: req.user.hours + hours })
    //     }
}

function addToCart900() {
    console.log("cart")
    cartDiv.html("Cart" + " " + `<i class="fas fa-shopping-cart"></i>` + `<hr>`)
    totalDiv.html(total + 18 + " hours" + `<br>` + "$900.00" + `<br>` + `<br>` + `<button id="checkout900" class="btn btn-primary" type="button">Checkout</button>`);
    var checkout900 = $("#checkout900");
    checkout900.on("click", goToStudent);

    function goToStudent() {
        console.log("student route")
        $.get("../views/student.html").then(window.location.replace("/student"))
    };
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