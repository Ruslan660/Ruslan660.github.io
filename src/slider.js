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
const l_btn = document.querySelector('.arrow-left');
const r_btn = document.querySelector('.arrow-right');
const img = document.querySelector('.gallery__photo');
const features = document.querySelectorAll('.features__text');
const dots = document.querySelector('.slider__dots');
const links = Array.from(document.querySelectorAll('.gallery__link'));

function setEntity(index) {
    img.style.backgroundImage = `url(${entities[index].img})`;
    features[0].innerHTML = entities[index].city;
    features[1].innerHTML = entities[index].area;
    features[2].innerHTML = entities[index].time;
    features[3].innerHTML = entities[index].cost;
}

function slider(index) {
    setEntity(index);
    unmakeDotAndLinkActive(slider_counter);
    makeDotAndLinkActive(index);
    slider_counter = index;
}

function addListeners(arr) {
    arr.forEach((item, id) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            slider(id);
        })
    })
}

function initDots() {
    for(let i = 0;i < entities.length;i++){
        dots.innerHTML += `<img src="src/img/menu-point.svg" alt="" class="menu-point">`;
    }
}

function makeDotAndLinkActive(index) {
    if (menu_point[index].classList.contains('menu-point--active')){

    }
    else if(links[index].classList.contains('active__link')) {
        menu_point[index].classList.add('menu-point--active');
    }
    else {
        menu_point[index].classList.add('menu-point--active');
        links[index].classList.add('active__link');
    }
}

function unmakeDotAndLinkActive(index){
    menu_point[index].classList.remove('menu-point--active');
    links[index].classList.remove('active__link');
}

initDots();

const menu_point = Array.from(document.querySelectorAll('.menu-point'));

makeDotAndLinkActive(0);

l_btn.addEventListener('click', () => {
    if(slider_counter === 0){
        slider(entities.length - 1);
    }
    else {
        slider(slider_counter - 1);
    }
})

r_btn.addEventListener('click', () => {
    if(slider_counter === entities.length - 1){
        slider(0);
    }
    else {
        slider(slider_counter + 1);
    }
})

addListeners(menu_point);
addListeners(links);