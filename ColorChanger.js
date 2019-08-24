console.log("loaded");
var btn = document.querySelector("button");
// var isPurple = false;
// btn.addEventListener("click", function(){
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }    
//     isPurple = !isPurple;
// });

// with css this is a faster way to do the above
btn.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});