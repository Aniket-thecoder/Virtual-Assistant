let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let vioce=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB" 
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
let day=new Date()
let hours=day.getHours()
if(hours>=0 && hours<12){
    speak("Good Morning Sir")
}
else if(hours>=12 && hours<16){
    speak("Good Afternoon Sir")
}else{
    speak("Good Evening Sir")
}
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex=event.resultIndex 
  let transcript=event.results[currentIndex][0].transcript
  content.innerText=transcript 
 // console.log(event)
 takeCommand(transcript.toLowerCase())
 }
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    vioce.style.display="block"

}) 
function takeCommand(message){
    btn.style.display="flex"
      vioce.style.display="none"
    if(message.includes("hello")){
        speak("hello sir, how can i help you?")
    } 
    else if(message.includes("who are you")){
        speak("I am Rocky, My Creator is Mr Aniket")
     } 
     else if(message.includes("open youtube")){
        speak("open youtube")
        window.open("https://www.youtube.com/")
     } 
     else if(message.includes("open google")){
        speak("open google")
        window.open("https://www.google.com/")
     } 
     else if(message.includes("open calculator")){
        speak("open calculator")
        window.open("calculator://")
     } 
     else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)    
     } 
     else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)    
         } 
     else{
        
        speak(`this is what i found on internet regarding ${message}`)
  window.open(`https://www.google.com/search?q=${message}`)
}
}






