AOS.init({
    offset: 120,
    once: true,
});

// FAQ FUNCTION

function faqfunct() {
    document.getElementById("List").classList.toggle("factive")
    document.getElementById("label").classList.toggle("factive2")
    document.getElementById("label").classList.toggle("factive3")
}

function faqfunct1() {
    document.getElementById("List1").classList.toggle("factive")
    document.getElementById("label1").classList.toggle("factive2")
    document.getElementById("label1").classList.toggle("factive3")
}

function faqfunct2() {
    document.getElementById("List2").classList.toggle("factive")
    document.getElementById("label2").classList.toggle("factive2")
    document.getElementById("label2").classList.toggle("factive3")
}

function faqfunct3() {
    document.getElementById("List3").classList.toggle("factive")
    document.getElementById("label3").classList.toggle("factive2")
    document.getElementById("label3").classList.toggle("factive3")
}


// Service Line Scroll Function

let animationsRun = false;
let numRun = false;


window.addEventListener('scroll', () => {

    if (pageYOffset > 2000 && !animationsRun) {



        document.getElementById("service-line").classList.toggle("anim-1");
        document.getElementById("service-line2").classList.toggle("anim-2");
        document.getElementById("service-line3").classList.toggle("anim-3");
        document.getElementById("service-line4").classList.toggle("anim-4");
        animationsRun = true; // Set the flag to true once animations have run

        const CountNumber4 = document.getElementById('count4')
        const FinalNumber4 = 90;
        let CurrNumber4 = 0;

        function updateCount4() {
            if (CurrNumber4 < FinalNumber4) {
                CurrNumber4++;
                CountNumber4.textContent = CurrNumber4;
                setTimeout(updateCount4, 23);

            }
        }

        updateCount4();

        const CountNumber5 = document.getElementById('count5')
        const FinalNumber5 = 84;
        let CurrNumber5 = 0;

        function updateCount5() {
            if (CurrNumber5 < FinalNumber5) {
                CurrNumber5++;
                CountNumber5.textContent = CurrNumber5;
                setTimeout(updateCount5, 23);

            }
        }

        updateCount5();

        const CountNumber6 = document.getElementById('count6')
        const FinalNumber6 = 88;
        let CurrNumber6 = 0;

        function updateCount6() {
            if (CurrNumber6 < FinalNumber6) {
                CurrNumber6++;
                CountNumber6.textContent = CurrNumber6;
                setTimeout(updateCount6, 23);

            }
        }

        updateCount6();

        const CountNumber7 = document.getElementById('count7')
        const FinalNumber7 = 95;
        let CurrNumber7 = 0;

        function updateCount7() {
            if (CurrNumber7 < FinalNumber7) {
                CurrNumber7++;
                CountNumber7.textContent = CurrNumber7;
                setTimeout(updateCount7, 23);

            }
        }

        updateCount7();

    }
});


// Inteager Increaser JS

let animationsRun2 = false;

function IntegerIncreaser() {



    if (pageYOffset > 2600 && !animationsRun2) {

        console.log("done");

        animationsRun2 = true;

        let num = document.querySelectorAll('.int-number');

        num.forEach(function (num) {

            num.innerHTML = 0;

            const finalnumber = +num.getAttribute("data-target")

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

