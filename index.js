const tempBtn = document.getElementById("temperature")
const resultText = document.querySelector(".calculation")
const backBtn = document.getElementById("back")
const conversionMenu = document.querySelector(".convertion-menu")
const convertTempBtn = document.getElementById("convert-temp")


const fahrenheitValue = document.getElementById("fahrenheit-value")
const celsiusValue = document.getElementById("celsius-value")

tempBtn.addEventListener("click", function(){
    conversionMenu.classList.add('hide-display')
    resultText.classList.remove('hide-display')
})
backBtn.addEventListener("click", function(){
    conversionMenu.classList.remove('hide-display')
    resultText.classList.add('hide-display')
})

    fahrenheitValue.addEventListener("input", () => {
        let result = (fahrenheitValue.valueAsNumber - 32) * 5/9
        celsiusValue.value = result
    })
    celsiusValue.addEventListener("input", () => {
        let result = (celsiusValue.valueAsNumber * 5/9) + 32
        fahrenheitValue.value = result
    })

