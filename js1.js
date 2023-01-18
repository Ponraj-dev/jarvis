const startButton = document.querySelector(".start");




//module to speaktamil.............................................................................................................

// To create a text to speech in Tamil, you will need to use the Web Speech API.

//Create a new instance of the SpeechSynthesisUtterance object and set the lang attribute to 'ta', which is the language code for Tamil.
function tamil(text){
    
    let utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'ta';

    // Set the text that is to be spoken.
    utterance.text = text;

    // Use the speak() method of the SpeechSynthesisUtterance object to start the speech synthesis.
    speechSynthesis.speak(utterance);

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
          tamil(data[0][0][0])
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

function weather(){
    let name="tirunelveli";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=e254e72d1b2007525c7fc950da4ff4ad&units=metric").then((e)=>{
        return e.json();
    }).then(function (data){
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;

    speak("The weather of your state is"+ temp);
    speak("And its feels like a "+ feels_like);


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

//module main to run all process..............................................................................................................



window.addEventListener("load",()=>{
    
    music();
    speak("Initiating system");
    speak("Activating jarvis");
    


     wishMe();
     startTime();
     speak("Let me give a quick intro about me");
     speak("Im jarvis ,An AI based voice assistant ");
     speak(" I Can do many things such as Forecasting about weather, Opening Google , Wikipedia, instagram, facebook");
     speak("I Can help you 24 hours and 7 Days a week");
     weather();
    translate('Im jarvis ,An AI based voice assistant ', 'ta'); 
    
    tamil();
 



   // tamil();
    

})


//recognition module.............................................................................................................

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();                                                  //assign a varibable to speech recoginition
//recognition.continous = false;                                     //set the mic to false default ,so it will turn on only if  we call
//recognition.lang = "en-US";                                       //set languange
//recognition.interimResult=false;                                    //to get the word accuracy
//recognition.maxAlternative=1;

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    document.getElementById("text1").innerHTML = transcript;
    speakThis(transcript.toLowerCase());
   
}

startButton.addEventListener('click', ()=>{
    recognition.start();
})



function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

  
    if(message.includes('hey') || message.includes('hello')) {

        
        const finalText = "Hello There";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
        console.log(message);

    }


    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is jarvis";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }
    else if(message.includes('tell me a joke')) {
        const finalText = "yep";
        speech.text = finalText;
        acquireJoke();
        document.getElementById("text2").innerHTML = finalText;
    }
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }
    else if(message.includes('what is weather') || message.includes('how is weather ')) {
        speech.text = "please wait";
        weather();
        console.log(message);
    } 
    else if(message.includes('open instagram') || message.includes('check my instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
        document.getElementById("text2").innerHTML = finalText;
    }
   

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
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
        speech.text = finalText;
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


