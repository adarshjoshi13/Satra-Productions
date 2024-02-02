AOS.init({
    offset: 120,
    once: true,
});

// Auto Write JS

let para = document.getElementById('auto-write');

const text1 = "CREATIVE SOLUTIONS";
const text2 = "PROFESSIONAL TEAM";
const text3 = "RELAIBLE EXPERIENCE";

let textshow = text1;

let i = 0;

let mover = 1;

function autowrite() {

    if (i <= textshow.length && mover == 1) {

        para.innerText = textshow.slice(0, i);
        i = i + mover;

    } else if (i > textshow.length || mover == -1) {


        mover = -1;
        para.innerText = textshow.slice(0, i);
        i = i + mover;

        if (i === 0 && textshow == text1) {

            mover = 1;
            textshow = text2;
            console.log("done");

        } else if (i === 0 && textshow == text2) {

            mover = 1;
            textshow = text3;
            console.log("done2");

        } else if (i === 0 && textshow == text3) {

            mover = 1;
            textshow = text1;
            console.log("done3");

        }

    }

}

setInterval(autowrite, 100)


// Testinomials Slider JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Up Arrow JS

function seescreen() {
    let uparrow = document.getElementById("up-arrow");


    if (window.pageYOffset > 300) {

        uparrow.classList.toggle("active", true);
    } else {

        uparrow.classList.toggle("active", false);
    }
}


window.addEventListener("scroll", seescreen);

// Inteager Increaser JS

let animationsRun = false;

function IntegerIncreaser() {

    if (pageYOffset > 1600 && !animationsRun) {

        animationsRun = true;

        let num = document.querySelectorAll('.int-number');

        num.forEach(function (num) {

            num.innerHTML = 0;

            const finalnumber = +num.getAttribute("data-target");

            const Increaser = finalnumber / 100;

            function incint() {

                if (+num.innerHTML < finalnumber) {
                    num.innerHTML = Math.round(+num.innerHTML + Increaser);

                } else {
                    num.innerHTML = finalnumber;
                }

            }

            setInterval(incint, 20)



        })

    }



};

window.addEventListener("scroll", IntegerIncreaser);

// User Window Tranfer Script

document.getElementById("last-row-button").addEventListener("click", () => {
    let whatsappUrl = "https://wa.me/9873350605?text=";
    window.open(whatsappUrl, "_blank").focus();
})

// Add your existing JavaScript code here

document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'block';  // Change to 'none' if you want the pop-up hidden by default
});

function closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.style.display = 'none';
}
