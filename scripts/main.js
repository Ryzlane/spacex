// VARIABLES DECLARATION
const tabModules = document.querySelectorAll(".modules > div")
const informations = document.querySelector(".informations")
const detailsContent = document.querySelector(".details-content")
const rocket = document.querySelector(".rocket")

rocket.draggable = true

changingContent = (selected) => {
    informations.innerHTML = content[selected]
}

changingRocket = (selected) => {
    if (selected == "one" || selected == "two" || selected == "three") {
        rocket.innerHTML = `<img src="images/falcon1.png" alt="rocket">`
    }
    else if (selected == "four" || selected == "five" || selected == "six" || selected == "seven") {
        rocket.innerHTML = `<img src="images/falcon9.png" alt="rocket">`
    }
    else if (selected == "eight" || selected == "nine" || selected == "ten") {
        rocket.innerHTML = `<img src="images/falconheavy.png" alt="rocket">`
    }
}

// main function that is activated by changing selected module on click
for(let i = 0; i < tabModules.length; i++) {
    tabModules[i].addEventListener("click", () => {
        for(let j = 0; j < tabModules.length; j++) {
            // remove old selection
            tabModules[j].dataset.selection = "not-selected"
        }
        // add the new selection
        tabModules[i].dataset.selection = "selected"
        changingContent(tabModules[i].dataset.number)
        changingRocket(tabModules[i].dataset.number)
    })
}