
var calcScreen = document.querySelector(".screen");
var buttons = document.querySelectorAll(".btn");
var equalButton = document.querySelector(".btn-equal");
var clearButton = document.querySelector(".btn-clear");


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let symbol = e.target.dataset.num;
        calcScreen.value += symbol;


        equalButton.addEventListener("click", (equal) => {
            let result = eval(calcScreen.value)
            calcScreen.value = result;
        })

        clearButton.addEventListener("click", (clear) => {
            calcScreen.value = "";
        })

    })
})