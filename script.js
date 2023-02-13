// Getting html elements
const convertInput = document.getElementById("convert-input");
const convertBtn = document.getElementById("convert-btn");
const containerBodyElm = document.getElementById("container-body");

// Array containing all units
const unitArr = [
    {
        unitType: "length",
        metricUnit: "meters",
        impUnit: "feet",
        conversion: 3.281
    },
    {
        unitType: "volume",
        metricUnit: "liters",
        impUnit: "gallons",
        conversion: 2.264
    },
    {
        unitType: "mass",
        metricUnit: "kilograms",
        impUnit: "pounds",
        conversion: 2.204
    }
]

// Expands input field 
convertInput.addEventListener("keydown", function() {
    if(convertInput.value.length > 1) {
        convertInput.style.width = ((convertInput.value.length) * 25) + 117 + "px";
    }
})

// The convert button listens for clicks, and checks if the input field is filled out before running the function
convertBtn.addEventListener("click", function() {
    if (convertInput.value) {
        renderUnitBoxes(convertInput.value);
        convertInput.value = "";
    }      
})

// Renders out the unit boxes 
function renderUnitBoxes(number) {   
    let elementString = "";
    for (const item of unitArr) {
        const convertedNumbers = convert(number, item.conversion);
        
        elementString += `
            <div class="unit-box">
                <h3>${item.unitType} (${item.metricUnit}/${item.impUnit})</h3>
                <p>
                    ${number} ${item.metricUnit} = ${convertedNumbers.metricConverted} | 
                    ${number} ${item.impUnit} = ${convertedNumbers.impConverted} ${item.impUnit}
                </p>
            </div>
        `
    }
    containerBodyElm.innerHTML = elementString;
}

// Converts the number into metric and imperial values
function convert(number, conversion) {
    return {
        metricConverted: (number * conversion).toFixed(2),
        impConverted: (number / conversion).toFixed(2)
    }
}

// Renders unit boxes so they appear even before the convert button has been clicked
renderUnitBoxes(1);