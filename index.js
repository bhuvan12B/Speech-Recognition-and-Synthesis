const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
// recognition.continuous = true;

let p = document.createElement("p");

const words = document.querySelector(".words");

words.appendChild(p);

recognition.addEventListener("result", function(evt) {
	
	p.textContent = "Listening..."
	if(evt.results[0].isFinal === true) {
		
		p.textContent = evt.results[0][0].transcript;
		p = document.createElement("p");
		words.appendChild(p);
	}

	//  console.log(evt.results[0]);	
});

let shut = false;

recognition.addEventListener("end", function() {
	if(!shut) {
		recognition.start();
	}
});

const mic = document.querySelector("#mic");

const startPara = document.querySelector("#start-para");
const stopPara = document.querySelector("#stop-para");

mic.addEventListener("click", function() {
	recognition.start();
	startPara.classList.add("disappear");
	stopPara.classList.remove("disappear");
	console.log("ready to receive ur kanchina kanta");
});



const stop = document.querySelector("#stop");
stop.addEventListener("click", function() {
	console.log("transciption stoppeed");
	shut = true;
	startPara.classList.remove("disappear");
	stopPara.classList.add("disappear");
	recognition.stop();
})

// const disp = document.querySelector("p");

// recognition.onresult = (evt) => {
// 	let text = evt.results[0][0].transcript;
// 	console.log(text);
// 	disp.textContent = text;
// };

// recognition.onspeechend = () => {
// 	recognition.stop();
//   };


//-----------------------SpeechSynthesis-------------------
const synth = window.speechSynthesis;
const inputTxt  = document.querySelector("textarea");
const speakButton = document.querySelector("#speakButton");
speakButton.onclick = () => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    synth.speak(utterThis);
}

const refresh = document.querySelectorAll(".refresh");

for(var i = 0; i< refresh.length; i++){
	refresh[i].addEventListener("click", function() {
		location.reload();
	});
}