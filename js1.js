const startButton = document.querySelector(".start");



/*function tamil(){
    var utterance = new SpeechSynthesisUtterance('உங்கள் பதிவு செயல்முறை நிறைவடைந்தது');
    utterance.lang='ta-IN'; // for US english, en-GR for british
    window.speechSynthesis.speak(utterance);
}*/


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



//weather module.....................................................................................................................

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



//module main to run all process..............................................................................................................



window.addEventListener("load",()=>{
    
    //music();
    speak("Initiating system");
    speak("Activating jarvis");
    wishMe();
    startTime();
    speak("Let me give a quick intro about me");
    speak("Im jarvis ,An AI based voice assistant ");
    speak(" I Can do many things such as Forecasting about weather, Opening Google , Wikipedia, instagram, facebook");
    speak("I Can help you 24 hours and 7 Days a week");
    weather();
 



   // tamil();

})


//recognition module.............................................................................................................

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();                                                  //assign a varibable to speech recoginition
recognition.continous = false;                                     //set the mic to false default ,so it will turn on only if  we call
recognition.lang = "en-US";                                       //set languange
recognition.interimResult=false;                                    //to get the word accuracy
recognition.maxAlternative=1;

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
