
// VARIABLES
const menuVideo = document.getElementById("menu-video")
const instagram = {
    link: document.getElementById("link-instagram"),
    section: document.getElementById("instagram")
}
const pinterest = {
    link: document.getElementById("link-pinterest"),
    section: document.getElementById("pinterest")
}
const movies = {
    link: document.getElementById("link-movies"),
    section: document.getElementById("movies")
}
const video = {
    link: document.getElementById("link-video"),
    section: document.getElementById("video")
}

//Add events
instagram.link.addEventListener("click", () => showHideSection(instagram))
pinterest.link.addEventListener("click", () => showHideSection(pinterest))
movies.link.addEventListener("click", () => showHideSection(movies))
video.link.addEventListener("click", () => showHideSection(video))

//First Page
let currentPage = instagram
instagram.link.classList.add("link-active")
instagram.section.style.display = "grid"

//Show hide section
function showHideSection(page) {
    let oldPage = currentPage
     currentPage = page
    
    oldPage.link.classList.remove('link-active')
    currentPage.link.classList.add('link-active')

    oldPage.section.style.display = "none"
    currentPage.section.style.display = "grid"
}

//Show hide video menu
function showHide() {
    menuVideo.classList.toggle('is-active')
}