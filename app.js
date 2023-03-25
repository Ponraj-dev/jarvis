const startButton = document.getElementById("start");



//module to speaktamil.............................................................................................................

// To create a text to speech in Tamil, you will need to use the Web Speech API.

//Create a new instance of the SpeechSynthesisUtterance object and set the lang attribute to 'ta', which is the language code for Tamil.
function speakTamil(text){
    
    let utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'ta';

    // Set the text that is to be spoken.
    utterance.text = text;
    console.log(utterance)

    // Use the speak() method of the SpeechSynthesisUtterance object to start the speech synthesis.
    speechSynthesis.speak(utterance);

}

//phone call...............................................................................................................................
function call(){
    const phoneNumber = "6374555598"; // Replace with the phone number you want to call

// Show a confirmation dialog before initiating the call
if (confirm(`Do you want to call ${phoneNumber}?`)) {
  window.location.href = `tel:${phoneNumber}`;
}

}
 



//module to splitewords.....................................................................................................................

function splitewords(sentence){
    let s = sentence.split(" ");
    console.log(s);

    for ( let l=0;l<s.length;l++)
	{
		var name= s[l]
            if(name=="of"||name=="in"|| name=="on"||name=="at"){

                name=s[l + 1];

            for ( let m=0;m<name.length;m++){
                    if (name[m]=="?"){
                       name= name.replace("?", "")
                    console.log(name)
                    
                }        
            }
            return name
            
            }
            else if(name=="hello"&&name=="to"){
                name=s[l+1]
            }
            else if(name=="into"){
                name=s[l-1];
            }
            

       
    }
    console.log(name)
   
    return name
}
//access button............................................................................................................................................................................................

function access_button(){
      
    const list = document.querySelector(".access");
    const button = document.createElement('access_button');
 
    

   list.innerHTML = `<button class="access_button "type="submit"> click here</button> `
   list.appendChild(button);
}



//facebook..............................................................................................................................................................................................................................

function facebook(){

    const launchFacebookMB = () => {
        window.location.href = "fb://";
    };
    
    
      access_button();
     document.querySelector(".access").addEventListener('click', () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(navigator.userAgent)) {
            console.log('Mobile device detected');
            launchFacebookMB();
          }
          else {
            window.location.href = "https://www.facebook.com";
          }
         
      });



    }


  
//whatsapp message...............................................................................................................................................................................................................................

 


function whatsapp(){
    const phoneNumber = "6382 958 803"; // Replace with the phone number you want to message
    const message = "Hello!"; // Replace with the message you want to send
    const launchWhatsappMB = () => {
        window.location.href = "intent://send/+123456789#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end";
    };
// Open the WhatsApp application with a pre-populated message
access_button();
document.querySelector(".access").addEventListener('click', () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(navigator.userAgent)) {
        console.log('Mobile device detected');
        launchWhatsappMB();
      }
      else {
        
        window.location.href = "https://web.whatsapp.com/";
      }
     
  });
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
                    
                }}

            else if(s.includes("I")){
                name=s[temp+2]
                speak("hello "+ name +" nice to meet you ")
            }
            
	}
   
    return name
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

// //notification .................................................................................................................
// function notification(){
//     // check if the browser supports the Notification API
// if ("Notification" in window) {
//     // request permission to show notifications
//     Notification.requestPermission().then(function (result) {
//       if (result === "denied") {
//         console.log("Permission for notifications was denied");
//         return;
//       } else if (result === "default") {
//         console.log("Permission for notifications was dismissed");
//         return;
//       }
  
//       // create a new notification
//       var notification = new Notification("Hello, World!", {
//         body: "This is a notification sent using JavaScript.",
//       });
  
//       // close the notification after 5 seconds
//       setTimeout(notification.close.bind(notification), 5000);
//     });
//   }
  
// }





//module to translator.........................................................................................................

// Create a function to translate text
// Create a function that takes two parameters: text and language


//Create a function to translate a given string into another language
// function translate(string, language) {
//     //Create an object to store the language codes
//     let languageCodes = {
//       en: 'English',
//       es: 'Spanish',
//       fr: 'French',
//       de: 'German',
//       it: 'Italian',
//       ja: 'Japanese',
//       ta: 'tamil'
//     };
//     //Check if the given language is a valid code
//     if (languageCodes[language]) {
//       //If valid, use the Google Translate API to translate the string
//       let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${string}`;
//       //Make the API request
//       fetch(url)
//         .then(res => res.json())
//         .then(data => {
//           //Log the translated string
//           console.log(`Translated string to ${languageCodes[language]}: ${data[0][0][0]}`);
//           speakTamil(data[0][0][0])
//         })
//         .catch(error => {
//           //Log an error if the request fails
//           console.log(`Error: ${error}`);
//         });
//     } else {
//       //Log an error if the language code is invalid
//       console.log('Error: Invalid language code');
//     }
//   }

function texttranslate(string, language) {
    //Create an object to store the language codes
    let languageCodes = {
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      de: 'German',
      it: 'Italian',
      ja: 'Japanese',
      ta: 'tamil',
      hi: "hindi"
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
          speak(data[0][0][0],language)
        })
        .catch(error => {
          //Log an error if the request fails
          console.log(`Error: ${error}`);
        });

        
    } else {
      //Log an error if the language code is invalid
      console.log('Error: Invalid language code');
      speak("Error: Invalid language code",language)
    }
  }



//input translation ...............................................................................................................................................................

async function Input_translate(string) {

    //If valid, use the Google Translate API to translate the string
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl="en"&dt=t&q=${string}`;
    //Make the API request


  const res = await fetch(url);
  const data = await res.json();
  //Log the translated string
  console.log(typeof(data[0][0][0]))
  recheck(data[0][0][0].toLowerCase())
  
  
      // .catch(error => {
      //   //Log an error if the request fails
      //   console.log(`Error: ${error}`);
      // });
}



//output ttranslation ...............................................................................................................................................................

async function output_translate(string,language) {

 let Speak_language = language
  
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${Speak_language}&dt=t&q=${string}`;
    //Make the API request
    fetch(url)
      .then(res => res.json())
      .then(data => { 
          console.log(data[0][0][0])
        speak(data[0][0][0],language)
        
      })
      .catch(error => {
        //Log an error if the request fails
        console.log(`Error: ${error}`);
      });
  } 



// Call the function with a string and language


function language(){
const langu = document.getElementById("language").value;
console.log(langu)

return langu
}




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


function speak(sentence,language){
    let utterance = new SpeechSynthesisUtterance(); 
    
     utterance.lang = language; 

     utterance.text = sentence;

   
    speechSynthesis.speak(utterance);
    document.getElementById("text2").innerHTML =  sentence;

}  





//time module .............................................................................................................

function startTime() {
    output_language =document.getElementById("language").value
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var p = "Pm";

    // add a zero in front of numbers greater than 10
    var crttime ="The time is " + convertHourToName(h) + " o'clock and " + convertNumberToName(m) + "  minutes" + period(p,h);
    
    output_translate(crttime,output_language);
    console.log(crttime)
       
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

function weather(message,output_language){
    var language = output_language;
    var name=splitewords(message)
    console.log(language)
    
    
    let cityname= name;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=e254e72d1b2007525c7fc950da4ff4ad&units=metric").then((e)=>{
        return e.json();
    }).then(function (data){
        console.log(data)
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    
    
    
  
   
    output_translate("The weather of "+cityname+ " is : "+ temp,language);
    output_translate("And its feels like a : "+ feels_like, language);
   

   
  
    document.getElementById("text2").innerHTML =  temp;
    

});

}

//joke generator .............................................................................................................................

function acquireJoke(language) {
    

    let API = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    // remove content-fade class
    // fetch joke from the API
    fetch(API)
      .then((info) => info.json())
      .then((item) => {

        let joke = item.joke;
        output_translate(joke,language)
        
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
        speak("your device has "+ level+ "percentage of charge")
        speak("and i think it would be available on"+ hr+"hours"+min+"minutes")
        document.getElementById("text2").innerHTML = level;
        console.log(hr,min)

    });

}




//recheck message.............................................................................................................................


function recheck(message){
  
    var count = 0 ;
    if(message == localStorage.getItem("oldMessage")){
    
        if (localStorage.getItem("count")>3){
            speak("how long would you ask the same question");
            speak("you can ask me about weather , temperature ,and talk in tamil");
            speak("any ways");
            speakThis(message);
    

            console.log('repeat')
        }
        else if(localStorage.getItem("count")<=3)
        {
            count=localStorage.getItem("count");
            count=count+1;
            newcount=localStorage.setItem("count",count);
            localStorage.setItem("oldMessage",message);
           
            speakThis(message);
            
           
            console.log(count)
    
        }
    }    
    else if(message!=localStorage.getItem("oldMessage")){
       
        count=localStorage.setItem("count",count);
        localStorage.setItem("oldMessage",message)
        speakThis(message);
        console.log(count)
       
        //speakThis(message)
    }

    else{
        localStorage.setItem("count",count);
        localStorage.setItem("oldMessage",message)
        console.log("not count")

    }

    
    // if(message == localStorage.getItem("oldMessage")){
    //         speak("how long would you ask the same question")
    //         speak("you can ask me about weather , temperature ,and talk in tamil")
    //         speak("any ways")
    //         speakThis(message)
    // }

    // else if(message!=localStorage.getItem("oldMessage")){
    //     //count=count+1;
    //     speakThis(message)
    // }
    // localStorage.setItem("oldMessage",message)

}


//location ................................................................................................................................................................................................

function getLocation(output_language) {
    if (navigator.geolocation) {
        
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      $("#location").text("Geolocation is not supported by this browser.");
    }
  }
  
  
  function showPosition(position) {
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = "d469e0bf85bf43b9af32e52311ad3b43";
    const url = "https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "+" + longitude + "&key=" + apiKey;
    var language = "en-us";

    $.getJSON(url, function(data) {
      if (data.results.length > 0) {
        const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village;
        if (city) {
          output_translate("Your location: " + city,language);
          output_translate("if i'm wrong , tell me your location with name of your location ", language);
          weather(city)
        } else {
          $("#location").text("Could not determine your city.");
        }
      } else {
        $("#location").text("Could not determine your location.");
      }
    });
  }





//general talk..................................................................................................................................

// Function to send user query to ChatGPT using OpenAI API
function generateResponse(input,language) {
    const prompt = "Hello, how can I help you today?";
    const temperature = 0.7;
    const maxTokens = 10;
    let output_language = language;

    $.ajax({
      url: "https://api.openai.com/v1/engines/davinci/completions",
      type: "POST",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer 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");
      },
      data: JSON.stringify({
        prompt,
        temperature,
        max_tokens: maxTokens,
        prompt: input,
      }),
      success: function(result) {
        const response = result.choices[0].text.trim();
        if (response.length > 0) {
          $("#text2").text(response);
          var result = $("#text2").text();
        }
        console.log(result)
        output_translate(result,output_language)
      },
      error: function(_xhr, _status, error) {
        console.log("Error:", error);
        result = "sorry i don't know , i could get this from google for you"
        output_translate(result,output_language)
        window.open(`https://www.google.com/search?q=${input.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + input;
        output_translate(finalText,output_language)
        
      },
    });
  }

  // Handle form submission
 





// Define the function to create the task reminder..............................................................................................


// function createTaskReminder(task, time) {
//     // Calculate the time until the reminder should be triggered
//     var now = new Date();
//     var timeDiff = time.getTime() - now.getTime();
  
//     // Schedule the reminder to be triggered at the specified time
//     setTimeout(function() {
//       // Show the reminder
//       alert("Reminder: " + task);
//     }, timeDiff);
//   }
  
//   // Usage example: create a reminder for "Submit report" at 3pm today
//   var task = "Submit report";
//   var time = new Date();
//   time.setHours(12, 40, 0, 0); // Set the time to 3pm today
//   //createTaskReminder(task, time);
  



//module main to run all process..............................................................................................................

window.addEventListener("load",()=>{

  //  speak_check(textToSpeech);
    
//     music();
        speak("Initiating system");
        speak("Activating jarvis");
       // notification();
      
       
        //whatsapp();
      //translate('I\'m jarvis ,An A I based voice assistant ', 'ta'); // Hola mundo
    
     
        
//     femaleVoice("Im jarvis ,An AI based voice assistant ","ta")
//     //battery();
       
          wishMe();
// //    // userName("i am ponraj") ;
//        localStoragenew();
    
        //startTime();
        speak("Let me give a quick intro about me");
        speak("Im jarvis ,An AI based voice assistant ");
        speak(" I Can do many things such as Forecasting about weather, Opening Google , Wikipedia, instagram, facebook");
        speak("I Can help you 24 hours and 7 Days a week");
        document.getElementById("text2").innerHTML = "Activating jarvis";
        
     // weather();

   // tamil();

})

//recognition module.............................................................................................................

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();                                                  //assign a varibable to speech recoginition
recognition.continous = false;                                      //set languange                                     //set the mic to false default ,so it will turn on only if  we call

// recognition.interimResult=false;                                    //to get the word accuracy
// recognition.maxAlternative=1;


recognition.onresult = async (event) => {


    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    document.getElementById("text1").innerHTML = transcript;
    
  
      var message = transcript.toLowerCase()
      
//     console.log(typeof(translate(message)))
      Input_translate(message)
//     console.log(typeof(transcript.toLowerCase()))
     
   // speakThis(transcript.toLowerCase());
    console.log("recognition end")
    recognition.stop()
    
}

startButton.addEventListener('click', ()=>{
    recognition.lang = language(); 

    recognition.start();
    
    console.log("event call")
})


function speakThis(message) {
  
    output_language = language()

    if(message.includes('battery status')||(message.includes("percentage"))) {
        battery();
    
    }
    

    else if(message.includes('how are you')||(message.includes("how is life"))||(message.includes("how was your day man"))||(message.includes("how's going"))) {
      
        const words = ["Im good","Im fine", "Pretty good", "Im well","Im OK", "Not too bad.", "Yeah, all right", " Very well, thanks", "I’ve been better",
        "Like you, but better", "Happy and content, thank you", "Going great. Hope this status quo persists for rest of the day","I am blessed!",
        "Way better than I deserve!"," Im doing really well.",
        "Surviving, I guess"

     ];
        const finalText = words[Math.floor(Math.random() * words.length)];
       
        output_translate(finalText, output_language)
        
       
    }
    else if (message.includes('facebook')||(message.includes("FB"))) {
        
        finalText=" i Need a conformation to open any app in your device,   click the button to confrim";
        output_translate(finalText, output_language);
        facebook();

// If the Facebook app is not installed, open the Facebook website instead
        

    }
    else if (message.includes('whatsapp')||(message.includes("WhatsApp web"))) {
        
        finalText=" i Need a conformation to open any app in your device,   click the button to confrim";
        output_translate(finalText, output_language);
        whatsapp();



    }

 
    else if (message.includes('say hello to')||(message.includes("say hi to"))) {
        
        finalText="hello "+splitewords(message)+" nice to meet you ";
        output_translate(finalText, output_language)
    }

    else if(message.includes('name')) {

        if(message.includes("your name"))
        {
            var finalText = "My name is jarvis";
        }
        else if(message.includes('what is my name')||(message.includes("do you remember my name"))) {
            
            finalText="you said your name is "+localStorage.getItem("username");
    
        }
        else if(message.includes('my name is')||(message.includes("I am"))) {
            finalText="hello "+userName(message)+" nice to meet you ";
            localStorage.setItem("username",userName(message));
            
        }
        output_translate(finalText, output_language)

    }

    // else if(message.includes('tanslate into')||message.includes('meaning in')) {
        
    //     isWordPresent(message);
    //     speech.text = finalText;
    //     document.getElementById("text2").innerHTML = finalText;
    // }

    else if(message.includes('tell me a joke')) {
        speak("yep",output_language);
        acquireJoke(output_language);

       
    }
    else if(message.includes('its not funny')||(message.includes("the joke is not funny"))) {
        const finalText = "yep ,i can do even better ask me again";
        document.getElementById("text2").innerHTML = finalText;
        output_translate(finalText, output_language);
        acquireJoke(output_language);
       
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        output_translate(finalText, output_language)
    }

    else if(message.includes('what is the weather of' )|| message.includes('in' )|| message.includes('temperature')) {
        
        weather(message,output_language)
    } 
    // else if(message.includes('weather') || message.includes('temperature')) {
    //     getLocation("en-US")
        
    // } 
    else if(message.includes('call') || message.includes('make a call')) {
       call();
    } 


    else if(message.includes('open instagram') || message.includes('check my instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        output_translate(finalText, output_language)
    }
   
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        output_translate(finalText, output_language)
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
        output_translate(finalText, output_language)
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        output_translate(finalText, output_language)
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        output_translate(finalText,output_language)
    }
    
    else if(message.includes('tamil')) {
        Tamil(message)
    }

    else if(message.includes('hey') || message.includes('hello')|| message.includes('hi')) {
        const finalText = "Hello There";
        
        output_translate(finalText,output_language)
        //speech.text = finalText;
       // document.getElementById("text2").innerHTML = finalText;
        //console.log(typeof(message));
    }
        
    else {




        const userInput = message;
        
        generateResponse(userInput,output_language);
        
    }
   

}



//module to no .of language support ...............................................................................................................


// if ('speechSynthesis' in window) {
//     window.speechSynthesis.addEventListener('voiceschanged', function() {
//       var voices = window.speechSynthesis.getVoices();
//       console.log('Available voices:');
//       for (var i = 0; i < voices.length; i++) {
//         var voice = voices[i];
//         console.log(voice.name + ' (' + voice.lang + ')');
//       }
//     });
//   } else {
//     console.log('SpeechSynthesisUtterance API is not supported in this browser.');
//   }



//module to get location........................................................................................................................
