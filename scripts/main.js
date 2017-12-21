// VARIABLES DECLARATION
const tabModules = document.querySelectorAll(".modules > div")
const informations = document.querySelector(".informations")
const detailsContent = document.querySelector(".details-content")

changingContent = (selected) => {
    console.log(selected)
    informations.innerHTML = content[selected]
}

for(let i = 0; i < tabModules.length; i++) {
    tabModules[i].addEventListener("click", () => {
        for(let j = 0; j < tabModules.length; j++) {
            // remove old selection
            tabModules[j].dataset.selection = "not-selected"
        }
        // add the new selection
        tabModules[i].dataset.selection = "selected"
        console.log(tabModules[i].dataset.number);
        changingContent(tabModules[i].dataset.number)
    })
}