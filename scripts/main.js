const tabModules = document.querySelectorAll(".modules > div")

console.log(tabModules[14].dataset.selection)

for(let i = 0; i < tabModules.length; i++) {
    tabModules[i].addEventListener("click", () => {
        console.log(tabModules[i].dataset.selection)
    })
}