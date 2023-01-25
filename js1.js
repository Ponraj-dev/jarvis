const startButton = document.querySelector(".start");




//module to speaktamil.............................................................................................................

// To create a text to speech in Tamil, you will need to use the Web Speech API.

//Create a new instance of the SpeechSynthesisUtterance object and set the lang attribute to 'ta', which is the language code for Tamil.
function speakTamil(text){
    
    let utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'ta';

    // Set the text that is to be spoken.
    utterance.text = text;

    // Use the speak() method of the SpeechSynthesisUtterance object to start the speech synthesis.
    speechSynthesis.speak(utterance);

}

//module to splitewords...................................................................................................................

function splitewords(sentence){
    let s = sentence.split(" ");
    console.log(s);

    for ( let l=0;l<s.length;l++)
	{

		var name= s[l]
            if(name=="of"||name=="in"|| name=="on"||name=="at"){
            name=s[l + 1];
            }
            else if(name=="into"){
                name=s[l-1];
            }
            

       
    }
    return name
}


//module to identification.........................................................................................................


function userName(sentence)
{
	// To break the sentence in words
	let s = sentence.split(" ");
    console.log(s);

	// To temporarily store each individual word
	for ( let temp=0;temp<s.length;temp++)
	{

			var name= s[temp]
            if(s.includes("name")&&s.includes("my")){
                if(name=="is")
                {
                    name=s[temp + 1];
                  speak("hello "+ name +" nice to meet you ")
                }}

            else if(s.includes("I")){
                name=s[temp+2]
                speak("hello "+ name +" nice to meet you ")
            }
            
	}
    console.log(name)
}

//module for local storage.....................................................................................................


function localStoragenew(){
        // Store an object in local storage
    var obj = { name: "John", age: 30 };
    localStorage.setItem("user", JSON.stringify(obj));

    // Retrieve the object from local storage
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user.name); // Output: "John"
    console.log(user.age); // Output: 30

    }


//module to translator.........................................................................................................

// Create a function to translate text
// Create a function that takes two parameters: text and language


//Create a function to translate a given string into another language
function translate(string, language) {
    //Create an object to store the language codes
    let languageCodes = {
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      de: 'German',
      it: 'Italian',
      ja: 'Japanese',
      ta: 'tamil'
    };
    //Check if the given language is a valid code
    if (languageCodes[language]) {
      //If valid, use the Google Translate API to translate the string
      let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${string}`;
      //Make the API request
      fetch(url)
        .then(res => res.json())
        .then(data => {
          //Log the translated string
          console.log(`Translated string to ${languageCodes[language]}: ${data[0][0][0]}`);
          speakTamil(data[0][0][0])
        })
        .catch(error => {
          //Log an error if the request fails
          console.log(`Error: ${error}`);
        });
    } else {
      //Log an error if the language code is invalid
      console.log('Error: Invalid language code');
    }
  }
// Call the function with a string and language


// function translator(text, language) {
//     let translatedText;
//     switch (language) {
//         case 'en':
//             translatedText = text;
//             break;
//         case 'ta':
//             translatedText = google.language.translate(text, 'en', 'ta');
//             break;
//         case 'fr':
//             translatedText = google.language.translate(text, 'en', 'fr');
//             break;
//         default:
//             translatedText = text;
//             break;
//     }
//      speak(translatedText);
// }

//module to female voice......................................................................................................

function femaleVoice(){
      
    if (window.speechSynthesis.getVoices().length === 0) {
      
        window.speechSynthesis.addEventListener('voiceschanged', function() {
            var voices = window.speechSynthesis.getVoices();

           
            var femaleVoice;
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].gender === 'female') {
                    femaleVoice = voices[i];
                    break;
                }
            }

            if(femaleVoice){
              
                var utterance = new SpeechSynthesisUtterance(); 
                utterance.text = "Hello, how are you?";
                utterance.voice = femaleVoice;
                window.speechSynthesis.speak(utterance);
            } else {
                console.log("No female voice found")
            }
        });
    } else {
        var voices = window.speechSynthesis.getVoices();
        var femaleVoice;
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].gender === 'female') {
                femaleVoice = voices[i];
                break;
            }
        }

        if(femaleVoice){
           
            var utterance = new SpeechSynthesisUtterance();
            utterance.text = "Hello, how are you?";
            utterance.voice = femaleVoice;
            window.speechSynthesis.speak(utterance);
        } else {
            console.log("No female voice found")
        }
    }
}

//module to speak.............................................................................................................


function speak(sentence){
    var text_speak = new SpeechSynthesisUtterance(sentence);  
    text_speak.rate = 1;
    text_speak.pitch = 2;
   
    

    window.speechSynthesis.speak(text_speak);

}  

//time module .............................................................................................................

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var p = "Pm";

    // add a zero in front of numbers greater than 10
    var crttime ="The time is " + convertHourToName(h) + " o'clock and " + convertNumberToName(m) + "  minutes" + period(p,h);
    speak(crttime);
       
}

function period(p,h){
    if(h < 12){
        p="Am" ;  
    }return p;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
} 

function convertHourToName(num) {
    if (num > 12) {
        num -= 12;
    }
    return convertNumberToName(num);
}

function convertNumberToName(num) {
    var lowNames = ["zero", "one", "two", "three", 
                  "four", "five", "six", "seven", "eight", "nine", 
                 "ten", "eleven", "twelve", "thirteen", "fourteen", 
                  "fifteen", "sixteen", "seventeen", 
                  "eighteen", "nineteen"];
    var tensNames = ["twenty", "thirty", "forty", "fifty", 
                "sixty", "seventy", "eighty", "ninety"];
    var tens, ones, result;
    if (num < lowNames.length) {
        result = lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "unknown"
        }
    }
    return result;
}


//background music module.............................................................................................................



function music(){
    var audio = new Audio("audio2.mp3");
    audio.play();
}



//wishing  module......................................................................................................................

function wishMe(){
    var day = new Date();
    var hr = day.getHours();

    if(hr >=0 && hr < 12)
    {
        speak("good Morning ");
    }
    else if(hr ==12){
        speak("good afternoon ");
    }

    else if(hr > 12 && hr <=17) {
        speak("good afternoon ");
    }
    else{
        speak("good evening ");
    }

}  



//weather module............................................................................................................................

function weather(message){

   
    var name=splitewords(message)
    let cityname= name;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=e254e72d1b2007525c7fc950da4ff4ad&units=metric").then((e)=>{
        return e.json();
    }).then(function (data){
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    
    
    speak("The weather of your state is"+ temp);
    speak("And its feels like a "+ feels_like);

    translate("The weather of your state is"+ temp,'ta')
  
    document.getElementById("text2").innerHTML =  temp;
    

});

}



//joke generator .............................................................................................................................

function acquireJoke() {

    let API = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    // remove content-fade class
    // fetch joke from the API
    fetch(API)
      .then((info) => info.json())
      .then((item) => {

        let joke = item.joke;
        speak(joke);
        document.getElementById("text1").innerHTML = joke;
        console.log(joke)
        
      });
  }


//module to speak in tamil.................................................................................................................

function Tamil(message){

    var finalText = "";

    if(message.includes('do you know tamil')||(message.includes("do you speak tamil"))){
        finalText = "எனக்கு தமிழ் கொஞ்சம் கொஞ்சம் தெரியும்";   
    }

    else if(message.includes("talking tamil")||(message.includes("talk in tamil"))||(message.includes("speak in tamil"))){
        finalText="வணக்கம் நான் ஜார்விஸ், நான் ஒரு செயற்கை நுண்ணறிவு"   
    }

    else if(message.includes("do you understand tamil")){
        finalText="என்னால் பேச முடியும், ஆனால் கேட்க முடியாது"
    }
    else if(message.includes("how did you know tamil")){
        finalText="என்னை உருவாக்கியவர், எனக்கு கற்று தந்தார்"
    }
    else if(message.includes("say in tamil")){
        finalText="இந்த நகைச்சுவையை தவிர்த்துக்கொல்லலாம்"
    }

    else{
        finalText="எனக்கு  தமிழில் ஆனா ஆவன மட்டுமே தெரியும்"
    }

    document.getElementById("text2").innerHTML = finalText;
    speakTamil(finalText) 
}

//module for battery ***************************************************************************************************************************************

function battery(){
    navigator.getBattery().then(function(battery) {

        var level = Math.ceil(battery.level*100);
        let hr = parseInt(battery.dischargingTime / 3600);
        let min = parseInt(battery.dischargingTime / 60 - hr * 60);
        speak("your system has "+ level+ "percentage of charge")
        speak("and i think it would be available on"+ hr+"hours"+min+"minutes")
        document.getElementById("text2").innerHTML = level;
        console.log(hr,min)

    });




}









//module main to run all process..............................................................................................................

window.addEventListener("load",()=>{

//     music();
//     speak("Initiating system");
//     speak("Activating jarvis");
//     //translate('Im jarvis ,An AI based voice assistant ', 'ta'); // Hola mundo
//     //femaleVoice("Im jarvis ,An AI based voice assistant ","ta")
//     //battery();
   
//     wishMe();
//    // userName("i am ponraj") ;
//     //localStoragenew();
    

//     startTime();
//     speak("Let me give a quick intro about me");
//     speak("Im jarvis ,An AI based voice assistant ");
//     speak(" I Can do many things such as Forecasting about weather, Opening Google , Wikipedia, instagram, facebook");
//     speak("I Can help you 24 hours and 7 Days a week");
//     weather();


   // tamil();

})


//recognition module.............................................................................................................

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();                                                  //assign a varibable to speech recoginition
//recognition.continous = false;                                      //set the mic to false default ,so it will turn on only if  we call
//recognition.lang = "en-US";                                         //set languange
//recognition.interimResult=false;                                    //to get the word accuracy
//recognition.maxAlternative=1;

recognition.onresult = (event) => {
    
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    document.getElementById("text1").innerHTML = transcript;
    speakThis(transcript.toLowerCase());
    console.log("recognition end")
   
}

startButton.addEventListener('click', ()=>{
    recognition.start();
    console.log("event call")
})



function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    

    speech.text = "";


    if(message.includes('battery status')||(message.includes("percentage"))) {
        battery()
    }

    else if(message.includes('my name is')||(message.includes("I am"))) {
        userName(message)
    }

    else if(message.includes('how are you')||(message.includes("how is life"))||(message.includes("how was the day man"))) {

        const words = ["Im good","Im fine", "Pretty good", "Im well","Im OK", "Not too bad.", "Yeah, all right", " Very well, thanks", "I’ve been better",
        "Like you, but better", "Happy and content, thank you", "Going great. Hope this status quo persists for rest of the day","I am blessed!",
        "Way better than I deserve!"," Im doing really well.",
        "Surviving, I guess"
 
     ];
        const finalText = words[Math.floor(Math.random() * words.length)];
        console.log(finalText)
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }


    else if(message.includes('name')) {

        if(message.includes("your name"))
        {
            var finalText = "My name is jarvis";
        }
        else if(message.includes("my name")){
            var finalText = "sorry i don't remember who you are";
        }
        speak(finalText)
        
        document.getElementById("text2").innerHTML = finalText;
    }

    // else if(message.includes('tanslate into')||message.includes('meaning in')) {
        
    //     isWordPresent(message);
    //     speech.text = finalText;
    //     document.getElementById("text2").innerHTML = finalText;
    // }

    else if(message.includes('tell me a joke')) {
        const finalText = "yep";
        speech.text = finalText;
        acquireJoke();
       
    }
    else if(message.includes('its not funny')||(message.includes("the joke is not funny"))) {
        const finalText = "yep ,i can do even better ask me again";
        document.getElementById("text2").innerHTML = finalText;
        speech.text = finalText;
        acquireJoke();
       
    }


    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }

    else if(message.includes('weather') || message.includes('temperature')) {
        speech.text = "please wait";
        weather(message)
    
        console.log(word);
    } 

    else if(message.includes('open instagram') || message.includes('check my instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }
   
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        startTime();
        document.getElementById("text2").innerHTML = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }
    
    else if(message.includes('tamil')) {
        Tamil(message)
    }

    else if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello There";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
        console.log(message);
    }
        
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    
    }
   
    speech.pitch = 2;
    speech.rate = 1;



    window.speechSynthesis.speak(speech);

}



//module to speak general things ...............................................................................................................


//module to get location........................................................................................................................





// var div  = "location";
// function getLocation() {
// if (navigator.geolocation) {                                                 //The Geolocation API is accessed via a call to navigator. geolocation ;
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
// } else {
//     div = "The Browser Does not Support Geolocation";
//     console.log(div)
// }
// }

// function showPosition(position) {

 
//     div = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude;
//     var lat = position.coords.latitude;
//     let lng = position.coords.longitude;




// console.log(div);
// }

// function showError(error) {
// if(error.PERMISSION_DENIED){
//     div = "The User have denied the request for Geolocation.";
//     console.log(div)
// }
// }

// function location(lat,lng){

 
//     var latlng = new google.maps.LatLng(lat, lng);
//     var geocoder = geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             if (results[1]) {
//                 console.log("Location: " + results[1].formatted_address);
            
//             }
//         }
//     });
  

// }

// getLocation();
// location(lat,lng);

