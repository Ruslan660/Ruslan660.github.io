const entities = [
    {
        img: "src/img/admiral-repair.jpg",
        city: "Rostov-on-Don <br   />LCD admiral",
        area: "81m<sup>2</sup>",
        time: "3.5 months",
        cost: 'Upon request'
    },
    {
        img: "src/img/sochi-thieves.jpg",
        city: "Sochi <br   />Thieves",
        area: "105m<sup>2</sup>",
        time: "3 months",
        cost: 'Upon request'
    },
    {
        img: "src/img/rostov-patriotic.jpg",
        city: "Rostov-on-Don <br   />Patriotic",
        area: "93m<sup>2</sup>",
        time: "4 months",
        cost: 'Upon request'
    }
]

let slider_counter = 0;

const menu_point = document.querySelectorAll('.menu-point');
const l_btn = document.querySelector('.arrow-left');
const r_btn = document.querySelector('.arrow-right');
const f_link = document.querySelector('#gallery__f_link');
const s_link = document.querySelector('#gallery__s_link');
const t_link = document.querySelector('#gallery__t_link');
const img = document.querySelector('.gallery__photo');
const features = document.querySelectorAll('.features__text');

console.log(features);

function setEntity(index) {
    img.style.backgroundImage = `url(${entities[index]})`;
    features[0].innerHTML = entities[index].city;
    features[1].innerHTML = entities[index].area;
    features[2].innerHTML = entities[index].time;
    features[3].innerHTML = entities[index].cost;
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
        setEntity(0);
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
        setEntity(1);
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
        setEntity(2);
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
        setEntity(2);
        slider_counter = 2;
    }
    else if(slider_counter === 1) {
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        f_link.classList.add("active__link");
        menu_point[0].classList.add("menu-point--active");
        setEntity(0);
        slider_counter = 0;
    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        s_link.classList.add("active__link");
        menu_point[1].classList.add("menu-point--active");
        setEntity(1);
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
        setEntity(0);
        slider_counter = 0;
    }
    else if (slider_counter === 1) {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.add("active__link");
        menu_point[2].classList.add("menu-point--active");
        setEntity(2);
        slider_counter = 2;
    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        s_link.classList.add("active__link");
        menu_point[1].classList.add("menu-point--active");
        setEntity(1);
        slider_counter = 1;
    }
})

menu_point[0].addEventListener('click', () => {
    if(f_link.classList.contains("active__link")) {

    }
    else {
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        f_link.classList.add("active__link");
        menu_point[0].classList.add("menu-point--active");
        setEntity(0);
        slider_counter = 0;
    }
})

menu_point[1].addEventListener('click', () => {
    if(s_link.classList.contains("active__link")) {

    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        t_link.classList.remove("active__link");
        menu_point[2].classList.remove("menu-point--active");
        s_link.classList.add("active__link");
        menu_point[1].classList.add("menu-point--active");
        setEntity(1);
        slider_counter = 1;
    }
})

menu_point[2].addEventListener('click', () => {
    if(t_link.classList.contains("active__link")) {

    }
    else {
        f_link.classList.remove("active__link");
        menu_point[0].classList.remove("menu-point--active");
        s_link.classList.remove("active__link");
        menu_point[1].classList.remove("menu-point--active");
        t_link.classList.add("active__link");
        menu_point[2].classList.add("menu-point--active");
        setEntity(2);
        slider_counter = 2;
    }
})