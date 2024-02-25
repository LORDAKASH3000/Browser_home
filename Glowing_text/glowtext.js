document.addEventListener("DOMContentLoaded",function(){
    let mainele = document.querySelector(".glow_text");
    let newele = document.createElement("h1");
    newele.classList.add("frame-obj");
    mainele.appendChild(newele);
    mainele = document.querySelector(".frame-obj");
    newele = document.createElement("div");
    newele.classList.add("text");
    newele.id = "editable-text";
    mainele.appendChild(newele);
    newele.contentEditable = true;
    const editableText = document.getElementById('editable-text');
    if (localStorage.getItem('Glowing_savedText')) {
        editableText.textContent = localStorage.getItem('Glowing_savedText');
    }
    else{
        localStorage.setItem('Glowing_savedText', "Enter your text");
        newele.textContent = localStorage.getItem('Glowing_savedText');
    }
    editableText.addEventListener('input', function () {
        localStorage.setItem('Glowing_savedText', this.textContent);
    });
    editableText.addEventListener('focusout', function () {
        if(!localStorage.getItem('Glowing_savedText')){
            localStorage.setItem('Glowing_savedText', "Enter your text");
            newele.textContent = localStorage.getItem('Glowing_savedText');
        }
    });
});
