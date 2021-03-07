const entities = [
    "src/img/admiral-repair.jpg",
    "src/img/sochi-thieves.jpg",
    "src/img/rostov-patriotic.jpg"
]

let slider_counter = 0;

const menu_point = document.querySelectorAll('.menu-point');
const l_btn = document.querySelector('.arrow-left');
const r_btn = document.querySelector('.arrow-right');
const f_link = document.querySelector('#gallery__f_link');
const s_link = document.querySelector('#gallery__s_link');
const t_link = document.querySelector('#gallery__t_link');
const img = document.querySelector('.gallery__photo');

function setPhoto(index) {
    img.style.backgroundImage = `url(${entities[index]})`;
}

f_link.addEventListener('click', () => {
    if(f_link.classList.contains("active__link")) {

    }
    else {
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        f_link.classList.add("active__link");
        menu_point[0].classList.add("menu-point--active");
        setPhoto(0);
        slider_counter = 0;
    }
})

s_link.addEventListener('click', () => {
    if(s_link.classList.contains("active__link")) {

    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        s_link.classList.add("active__link");
        menu_point[1].classList.add("menu-point--active");
        setPhoto(1);
        slider_counter = 1;
    }
})

t_link.addEventListener('click', () => {
    if(t_link.classList.contains("active__link")) {

    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.add("active__link");
        menu_point[2].classList.add("menu-point--active");
        setPhoto(2);
        slider_counter = 2;
    }
})

l_btn.addEventListener('click', () => {
    if(slider_counter === 0) {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.add("active__link");
        menu_point[2].classList.add("menu-point--active");
        setPhoto(2);
        slider_counter = 2;
    }
    else if(slider_counter === 1) {
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        f_link.classList.add("active__link");
        menu_point[0].classList.add("menu-point--active");
        setPhoto(0);
        slider_counter = 0;
    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        s_link.classList.add("active__link");
        menu_point[1].classList.add("menu-point--active");
        setPhoto(1);
        slider_counter = 1;
    }
})

r_btn.addEventListener('click', () => {
    if (slider_counter === 2) {
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        f_link.classList.add("active__link");
        menu_point[0].classList.add("menu-point--active");
        setPhoto(0);
        slider_counter = 0;
    }
    else if (slider_counter === 1) {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.add("active__link");
        menu_point[2].classList.add("menu-point--active");
        setPhoto(2);
        slider_counter = 2;
    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        s_link.classList.add("active__link");
        menu_point[1].classList.add("menu-point--active");
        setPhoto(1);
        slider_counter = 1;
    }
})