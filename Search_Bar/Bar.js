document.addEventListener("DOMContentLoaded", function(){
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();//voice recognition object
    recognition.interimResults = true;
    const voice_button = document.getElementById("voice");
    const input = document.getElementById("inbar");
    const par_input = document.querySelector(".search_bar");
    let voice_flag = false;
    //Enter as a Search
    input.onkeyup = event=>{
        if(event.key !== "Enter" || input.value === "")return;
        window.location.href = "https://www.google.com/search?q="+input.value.replace(" ","+");
    }
    //voice recognition control
    voice_button.onclick = ()=>{
        if(!voice_flag)recognition.start();
        else recognition.stop();
    }
    //cancle voice recognition on onclick at document 
    document.onclick = event=>{if(!voice_button.contains(event.target)){
        if(!voice_flag)return;
        recognition.stop();
    }}
    recognition.onresult = event=>{
        input.value = event.results[0][0].transcript;
        if(event.results[0].isFinal)input.focus();
    }
    recognition.onstart = ()=>{
        voice_flag = true;
        console.log("start");
    }
    recognition.onend = ()=>{
        voice_flag = false;
        console.log("stop");
    }
    input.onclick = ()=>{
        if(input.value === ""){
            input.placeholder = ""
        }else return
    }
    input.addEventListener("focusout",()=>{
        if(input.value === ""){
            input.placeholder = "Search Google or type a URL"
        }else return
    })
    // console.log("Value:",input.value);
});