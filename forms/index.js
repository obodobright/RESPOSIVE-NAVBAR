const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle('show')
        })
    }

}
showMenu('toggle', 'nav-menu')
    // const showMenu = () => {
    //     const show = document.getElementById('nav-menu');
    //     show.style.width = "160px"
    // }