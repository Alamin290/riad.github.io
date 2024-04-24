const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imagetwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".yes");
const btnNo = document.querySelector(".no");
const text = document.querySelector(".text");

function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

btnNo.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerwidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while(Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight)
    }

    while(Math.abs(newLeft - btnLeft) < containerwidth / 3) {
        newLeft = getRandomNumber(0, containerwidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
})

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imagetwo.classList.remove("hide");
})

function changeHeadingText() {
    var heading = document.getElementById("heading");
    heading.innerHTML = "Hoorayyyyy! I knew it";
}