"use strict";

const dotOneEl = document.querySelector(".dot1");
const dotTwoEl = document.querySelector(".dot2");
const dotThreeEl = document.querySelector(".dot3");
const optionEl = document.querySelector(".options");

const terminalContainer = document.querySelector(".terminal-container"); // BackgroundColor Changeable
const topInterface = document.querySelector(".top-interface");
const inputValue = document.querySelector('.inputvalue');
const btnEl = document.querySelector(".search")


// btnEl.addEventListener("click",()=>{
//     if(inputValue.value == "color"){
//         terminalContainer.style.backgroundColor = "red";
//     }
// })

dotOneEl.addEventListener("click",()=>{
    inputValue.value = "";
})

dotTwoEl.addEventListener("click",()=>{
    terminalContainer.style.transition = "all .5s ease-in-out";
    terminalContainer.classList.toggle('active');
})

// dotTwoEl.addEventListener("click", ()=>{
//     optionEl.classList.toggle("active");
// })

// Theme-Switcher
const mainThemeEl = document.querySelector("#themes");
const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");
const theme4 = document.querySelector(".theme4");

const mainBody = document.querySelector("body")

function themeSwitch(){
    theme1.addEventListener("click",()=>{
        terminalContainer.style.backgroundColor = "var(--dark-theme-bg)";
        mainBody.style.backgroundColor = "var(--dark-theme-main)";
    });
    theme2.addEventListener("click",()=>{
        terminalContainer.style.backgroundColor = "var(--blue-theme-bg)";
        mainBody.style.backgroundColor = "var(--blue-theme-main)";
    });
    theme3.addEventListener("click",()=>{
        terminalContainer.style.backgroundColor = "var(--brown-theme-bg)";
        mainBody.style.backgroundColor = "var(--brown-theme-main)";
    });
    theme4.addEventListener("click",()=>{
        terminalContainer.style.backgroundColor = "var(--pink-theme-bg)";
        mainBody.style.backgroundColor = "var(--pink-theme-main)";
    });
}

let isClicked = false;
dotThreeEl.addEventListener("click", ()=>{
    themes.style.transition = "all .5s ease-in-out";
    mainThemeEl.classList.toggle("active");
    isClicked = true;
    console.log(isClicked);
});

window.addEventListener("click", (event) => {
    if (isClicked && !dotThreeEl.contains(event.target)) {
      mainThemeEl.classList.remove("active");
      isClicked = false;
    }
});

themeSwitch();

// Console 
console.log("%c[Default] %c[BUILD INFO] %cRelease Version 1.0.1, %cDeveloped By @Sh_Kushal","color:purple;font-size:14px;","color:grey;","font-size:14px;","font-size:14px;");
console.log("%c[Establishing Connection...]","color:#D21312;font-size:14px;");
console.log("%c[Server] %cStatus : 200 OK","color:#D21312;font-size:14px;","font-size:14px;color:green");
console.log("%c[Themes] %cLoaded Successfully","color:rgb(0,0,200);font-size:14px;","color:green;font-size:14px;");

$('.interaction form').on('submit', function(e) {
    e.preventDefault()
    let terminalInput = $(this).find('input').val();
    console.log(terminalInput)
})



function executeTerminalCommand() {
}