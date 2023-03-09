const openRules = document.querySelector(".intro-rules");
const rules = document.querySelector(".rules");
const main = document.querySelector(".main");
const closeRules = document.querySelector(".rules .close");
const payUp = document.querySelector(".payup");
const pay = document.querySelector(".card");
const closePay = document.querySelector(".card .close");

openRules.addEventListener("click", () => openAnimation(rules));
closeRules.addEventListener("click", () => closeAnimation(rules));

payUp.addEventListener("click", () => openAnimation(pay));
closePay.addEventListener("click", () => closeAnimation(pay));

function openAnimation(ele) {
    ele.classList.add("show");
    setTimeout(() => {
        document.body.classList.add("opening-animation");
    }, 0);
    main.classList.add("dim");
}

function closeAnimation(ele) {
    ele.classList.remove("show");
    document.body.classList.remove("opening-animation");
    main.classList.remove("dim");
}
