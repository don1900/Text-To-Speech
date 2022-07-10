const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

var msg = new SpeechSynthesisUtterance();

window.addEventListener("load",()=>{
    alert("I am ready to change your text to voice")
})

btn.addEventListener("click",()=>{
// From 0 to 1
    // msg.rate = 1; // From 0.1 to 10
    // msg.pitch = 0; // From 0 to 2
    msg.text = text.value;
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[7]; 
    msg.volume = 1; 
    window.speechSynthesis.speak(msg);
});


