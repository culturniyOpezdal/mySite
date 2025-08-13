
//let logo = document.getElementById('logo');
let button = document.getElementById('myButton');
let titleAbout = document.getElementById('myTitleAbout');
let modal = document.getElementById('mymodal');
let close = document.getElementById('myClose');
let myContent = document.getElementById('myContent');
let menuTrigger = document.getElementById('menuTrigger');
let headerMenu = document.getElementById('headerMenu');

menuTrigger.onclick = function() {
    $("#headerMenu").slideToggle(500);
}

$("#headerMenu a").click(function() {
    if (headerMenu.style.display === "block") {
        $("#headerMenu").slideUp(500);
    }
});

close.onclick = function () {
   myContent.style.opacity = "0";
    setTimeout(none1, 150);
}
button.onclick = function () {
    modal.style.display = "block";
    setTimeout(opacity1, 100);

}
titleAbout.onclick = function () {
    titleAbout.style.color = "red";
}
// logo.onmouseenter = function () {
//     logo.style.fontSize = "60px";
// }
// logo.onmouseleave = function () {
//     logo.style.fontSize = "";
// }
function opacity1() {
    myContent.style.opacity = "1";
}
function none1() {
 modal.style.display = "none";
}
