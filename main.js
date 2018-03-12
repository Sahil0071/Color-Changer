var btn = document.querySelector("button");

/*btn.addEventListener("click", function() {
    if (isPurple) {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    }
    isPurple = !isPurple;
});*/
btn.addEventListener("click", function() {
    document.body.classList.toggle("purple");
})