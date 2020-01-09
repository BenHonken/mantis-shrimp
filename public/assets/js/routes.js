// variables

var storeButton = $("#storeButton");
var homepageButton = $("#brand");
var logoutButton = $("#logout");
var studentStore = $("#store");
var logoutButton = $("#logout");

// functions

function goToStore() {
    $.get("../views/store.html").then(window.location.replace("/store"))
};

function goToHomepage() {
    $.get("../views/index.html").then(window.location.replace("/"))
};

// event handlers

storeButton.on("click", goToStore);
homepageButton.on("click", goToHomepage);
logoutButton.on("click", goToHomepage);
studentStore.on("click", goToStore);