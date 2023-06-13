const slider_a = document.querySelector("#slider_a");
const slider_b = document.querySelector("#slider_b");
const slider_c = document.querySelector("#slider_c");
const slider_d = document.querySelector("#slider_d");
const toggle_a = document.querySelector("#toggle_a");
const toggle_b = document.querySelector("#toggle_b");
const toggle_c = document.querySelector("#toggle_c");
const toggle_d = document.querySelector("#toggle_d");

// TOGGLES FOR SLIDER A
toggle_a.addEventListener("mouseover", function() {
    let isOpen = slider_a.classList.contains("slide-in");

    slider_a.setAttribute("class", "slide-out");
});
toggle_a.addEventListener("mouseout", function() {
    let isOpen = slider_a.classList.contains("slide-out");

    slider_a.setAttribute("class", "slide-in");
});

// SLIDER B
toggle_b.addEventListener("mouseover", function() {
    let isOpen = slider_a.classList.contains("slide-in");

    slider_b.setAttribute("class", "slide-out");
});
toggle_b.addEventListener("mouseout", function() {
    let isOpen = slider_a.classList.contains("slide-out");

    slider_b.setAttribute("class", "slide-in");
});

// SLIDER C
toggle_c.addEventListener("mouseover", function() {
    let isOpen = slider_a.classList.contains("slide-in");

    slider_c.setAttribute("class", "slide-out");
});
toggle_c.addEventListener("mouseout", function() {
    let isOpen = slider_a.classList.contains("slide-out");

    slider_c.setAttribute("class", "slide-in");
});

// SLIDER D
toggle_d.addEventListener("mouseover", function() {
    let isOpen = slider_d.classList.contains("slide-in");

    slider_d.setAttribute("class", "slide-out");
});
toggle_d.addEventListener("mouseout", function() {
    let isOpen = slider_d.classList.contains("slide-out");

    slider_d.setAttribute("class", "slide-in");
});