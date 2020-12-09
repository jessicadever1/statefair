const eventHub = document.querySelector("#state-fair")
let ridesTarget = document.querySelector(".rides")
let foodTarget = document.querySelector(".food")
let gamesTarget = document.querySelector(".games")
let sideshowTarget = document.querySelector(".sideshow")

export const FullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchase", () => {
        return ridesTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("fullPackageTicketPurchase", () => {
        return foodTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("fullPackageTicketPurchase", () => {
        return gamesTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
    eventHub.addEventListener("fullPackageTicketPurchase", () => {
        return sideshowTarget.innerHTML += `
        <div class="person bigSpender"></div>
        `
    })
}