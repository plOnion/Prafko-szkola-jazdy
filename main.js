const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const menuItem = [...document.querySelectorAll(".cool-link")];

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);
menuItem.forEach(item =>{
    item.addEventListener('click', handleClick)});

const menu = document.querySelector("nav");
const call = [...document.querySelectorAll(".call__link")];

const handleScroll = () => {
    if (window.scrollY > 100) {

        menu.style.position = "fixed"
    } else {
        menu.style.position = "relative"
    }
};

const handleCall = (e) => {
    if (e.target.textContent !== "tel. 601 611 321") {
        e.target.textContent = "tel. 601 611 321"
    } else {
        e.target.textContent = "ZADZWOŃ"
    }
}

window.addEventListener("scroll", handleScroll);
call.forEach(callBtn => {
    callBtn.addEventListener("click", handleCall);
    callBtn.addEventListener("mouseover", handleCall);
    callBtn.addEventListener("mouseout", handleCall);
});


//             if (window.scrollY) {
//   window.scroll(0, 0);  // reset the scroll position to the top left of the document.