document.addEventListener("DOMContentLoaded", function(){
    let mainele = document.querySelector(".atom");
    let newdiv = document.createElement("div");
    newdiv.classList.add("container");
    mainele.appendChild(newdiv);
    mainele = document.querySelector(".container");
    newdiv = document.createElement("div");
    newdiv.classList.add("nucleous");
    mainele.appendChild(newdiv);
    newdiv = document.createElement("div");
    newdiv.classList.add("electron-1");
    mainele.appendChild(newdiv);
    newdiv = document.createElement("div");
    newdiv.classList.add("electron-2");
    mainele.appendChild(newdiv);
    newdiv = document.createElement("div");
    newdiv.classList.add("electron-3");
    mainele.appendChild(newdiv);
})