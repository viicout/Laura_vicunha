let section = document.querySelector(".container");
let stat = document.querySelectorAll(".stats .sta");
let start = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if(!start){
        stat.forEach((sta) => startCount(sta));
    }
    start = true;
    }
}
function startCount(el){
    let max = el.dataset.max;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent == max){
            clearInterval(count);
        }
    }, 2000 / stat);
}

var radio = document.querySelector('.manual-btn')
var cont = 1


setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
}
