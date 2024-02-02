
// AOS Library

AOS.init({
    offset: 120,
    once: true,
});

// AOS Library Ends



// Inteager Increaser

const CountNumber = document.getElementById('count')
const FinalNumber = 85;
let CurrNumber = 0;

function updateCount() {
    if (CurrNumber < FinalNumber) {
        CurrNumber++;
        CountNumber.textContent = CurrNumber;
        setTimeout(updateCount, 20);

    }
}

updateCount();

const CountNumber2 = document.getElementById('count2')
const FinalNumber2 = 80;
let CurrNumber2 = 0;

function updateCount2() {
    if (CurrNumber2 < FinalNumber2) {
        CurrNumber2++;
        CountNumber2.textContent = CurrNumber2;
        setTimeout(updateCount2, 23);

    }
}

updateCount2();

const CountNumber3 = document.getElementById('count3')
const FinalNumber3 = 95;
let CurrNumber3 = 0;

function updateCount3() {
    if (CurrNumber3 < FinalNumber3) {
        CurrNumber3++;
        CountNumber3.textContent = CurrNumber3;
        setTimeout(updateCount3, 23);

    }
}

updateCount3();

// Inteager Increaser Ends

// Service Line Scroll Function

let animationsRun = false;

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
