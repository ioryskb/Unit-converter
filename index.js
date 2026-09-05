const tempBtn = document.getElementById("temperature")
const weightBtn = document.getElementById("weight")
const lengthBtn = document.getElementById("length")
const tempConversionSection = document.querySelector(".temperature-calculation")
const weightConversionSection = document.querySelector(".weight-calculation")
const lengthConversionSection = document.querySelector(".length-calculation")

const backBtn = document.getElementById("back")
const conversionArea = document.querySelector(".conversion-area")
const conversionMenu = document.querySelector(".convertion-menu")
const convertTempBtn = document.getElementById("convert-temp")


const fahrenheitValue = document.getElementById("fahrenheit-value")
const celsiusValue = document.getElementById("celsius-value")
const poundsValue = document.getElementById("pound-value")
const kilogramValue = document.getElementById("kilogram-value")
const inchValue = document.getElementById("inch-value")
const cmValue = document.getElementById("cm-value")


tempBtn.addEventListener("click", function(){
    conversionMenu.classList.add('hide-display')
    weightConversionSection.classList.add('hide-display')
    tempConversionSection.classList.remove('hide-display')
    lengthConversionSection.classList.add('hide-display')
    conversionArea.classList.remove('hide-display')
})

weightBtn.addEventListener("click", function(){
    conversionMenu.classList.add('hide-display')
    tempConversionSection.classList.add('hide-display')
    weightConversionSection.classList.remove('hide-display')
    lengthConversionSection.classList.add('hide-display')
    conversionArea.classList.remove('hide-display')
})

lengthBtn.addEventListener("click", function(){
    conversionMenu.classList.add('hide-display')
    tempConversionSection.classList.add('hide-display')
    weightConversionSection.classList.add('hide-display')
    lengthConversionSection.classList.remove('hide-display')
    conversionArea.classList.remove('hide-display')
})

backBtn.addEventListener("click", function(){
    conversionMenu.classList.remove('hide-display')
    conversionArea.classList.add('hide-display')
})

    /* ============== Temperature calculation ================ */

    fahrenheitValue.addEventListener("input", () => {
        let result = (fahrenheitValue.valueAsNumber - 32) * 5/9
        celsiusValue.value = result
    })
    celsiusValue.addEventListener("input", () => {
        let result = (celsiusValue.valueAsNumber * 5/9) + 32
        fahrenheitValue.value = result
    })

    /* ======================================================== */

     /* ============== Weight calculation ================ */
     poundsValue.addEventListener("input", () => {
        let result = (poundsValue.valueAsNumber / 2.205)
        kilogramValue.value = result
    })
    kilogramValue.addEventListener("input", () => {
        let result = (kilogramValue.valueAsNumber * 2.205)
        poundsValue.value = result
    })

    /* ======================================================== */

         /* ============== Length calculation ================ */
     inchValue.addEventListener("input", () => {
        let result = (inchValue.valueAsNumber * 2.54)
        cmValue.value = result
    })
    cmValue.addEventListener("input", () => {
        let result = (cmValue.valueAsNumber / 2.54)
        inchValue.value = result
    })

    /* ======================================================== */



