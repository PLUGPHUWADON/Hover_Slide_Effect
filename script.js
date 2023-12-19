let arrimg = document.querySelectorAll("main > img");
let arrtextleft = document.querySelectorAll(".boxtextleft > h1");
let dot = document.querySelector(".dot");
let title = document.querySelectorAll(".boxscroll > div > h1:nth-of-type(2)");

let arrzindex = [6,5,4,3,2,1];
let getindex = 0;

for (let i = 0 ; i < arrimg.length ; i++){
    arrimg[i].style.zIndex = `${arrzindex[i]}`;
    arrtextleft[i].style.zIndex = `${arrzindex[i]}`;
    arrtextleft[i].style.opacity = "0";
}
arrtextleft[0].style.opacity = "1";
arrtextleft[0].style.transform = "translateX(0)";

window.addEventListener("mousemove",(event) => {
    dot.style.transform = `translate(${event.clientX-20}px,${event.clientY-20}px)`;
});

for (let i = 0 ; i < title.length ; i++){
    title[i].addEventListener("mouseenter",(event) => {
        dot.classList.remove("addscaledotback");
        dot.classList.add("addscaledot");

        for (let j = 0 ; j < arrimg.length ; j++){
            if (j != i){
                arrimg[j].classList.remove("addanimationimg");
                arrimg[j].style.opacity = "0"
            }
        }

        arrimg[i].classList.add("addanimationimg");

        if (getindex < i){
            arrtextleft[i].classList.remove("addanimationtextleftback");
            arrtextleft[i].classList.remove("addanimationtextleft");
            arrtextleft[getindex].classList.add("addanimationtextleftback");
            arrtextleft[i].classList.add("addanimationtextleft");
        }
        else if (getindex > i){
            arrtextleft[i].classList.remove("addanimationtextleftback");
            arrtextleft[i].classList.remove("addanimationtextleft");
            arrtextleft[getindex].classList.add("addanimationtextleftback");
            arrtextleft[i].classList.add("addanimationtextleft");
        }

        getindex = i;

    });
}

for (let i = 0 ; i < title.length ; i++){
    title[i].addEventListener("mouseleave",() => {
        dot.classList.remove("addscaledot");
        dot.classList.add("addscaledotback");
    });
}