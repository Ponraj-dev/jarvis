const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();                                                                        //assign a varibable to speech recoginition
recognition.continous = false;                                      //set the mic to false default ,so it will turn on only if  we call
recognition.lang = "en-US";                                       //set languange
recognition.interimResult=false;                                    //to get the word accuracy
recognition.maxAlternative=1;

/*function tamil(){
    var utterance = new SpeechSynthesisUtterance('உங்கள் பதிவு செயல்முறை நிறைவடைந்தது');
    utterance.lang='ta-IN'; // for US english, en-GR for british
    window.speechSynthesis.speak(utterance);
}*/

function speak(sentence){
    var text_speak = new SpeechSynthesisUtterance(sentence);  
    text_speak.rate = 1;
    text_speak.pitch = 2;
  
    window.speechSynthesis.speak(text_speak);

}  

function music(){
    var audio = new Audio("audio2.mp3");
    audio.play();
}

function time(){
    var day = new Date();
    var hr =day.getHours();
    var mn =day.getMinutes();
    speak(day);
    speak(hr);
    //speak(mn);

}

function wishMe(){
    var day = new Date();
    var hr = day.getHours();

    if(hr >=0 && hr < 12)
    {
        speak("good Morning there");
    }
    else if(hr ==12){
        speak("good noon there");
    }

    else if(hr > 12 && hr <=17) {
        speak("good afternoon there");
    }
    else{
        speak("good evening there");
    }

}  

//actual window to perform a task
window.addEventListener("load",()=>{
    
    music();
    speak("Initiating system");
    speak("Activating jarvis");
    wishMe();
    time();
    speak("Let me give a quick intro about me");
    speak("Im jarvis ,An AI based voice assistant ");
    speak(" I Can do many things such as Forecasting about weather, Opening Google , Wikipedia, instagram, facebook");
    speak("I Can help you 24 hours and 7 Days a week");
    speak("thank you");

   // tamil();
})



recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    speakThis(transcript.toLowerCase());
}

startButton.addEventListener('click', ()=>{
    recognition.start();
})



function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

  
    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
        console.log(message);
    }
    speech.volume = 1;
    speech.pitch = 2;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}


//window - access present window 
//addeventlistener - check the event is happens or not (like try block)

//webkitspecch recognition - This accepts input via audio, performs speech recognition and puts the text into the input box.
/*
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 2;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("voice assistant activation");
    speak("Going online");
    speak("im jarvis");
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Inertia";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('what is weather') || message.includes('how is weather ')) {
        
        apik = "3045dd712ffe6e702e3245525ac7fa38"
        inputval = message.replace(" ","+")
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {

         //.then(data => console.log(data))
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        const finalText = nameval 
       //window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        //const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    })}

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
   

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 2;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}*/