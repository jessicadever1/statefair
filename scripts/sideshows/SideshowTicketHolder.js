const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", () => {
        return contentTarget.innerHTML += `
        <div class="person gawker"></div>
        `
    })
}