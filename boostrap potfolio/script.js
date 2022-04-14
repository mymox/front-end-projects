const toTop = document.getElementById("#back-to-top");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset>100) {
    toTop.style.background="white";

}
else {
    toTop.classList.remove("active");
}})