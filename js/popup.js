const pMenu = document.querySelector("#pMenu");
const popupMenu = document.querySelector("#popupMenu");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

pMenu.addEventListener("click", clickBurger);

function clickBurger(e){
    e.preventDefault();
    popupMenu.classList.toggle("open");
    renderPopup();
    pMenu.classList.toggle("active");
    body.classList.toggle("noscroll");

}

function renderPopup(){
    popupMenu.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popupMenu.classList.remove("open");
  pMenu.classList.remove("active");
  body.classList.remove("noscroll");
}
