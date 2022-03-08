Webcam.set({

width: 350,
height: 300,
image_format: 'png',
png_quality: 100



}) ;


camera = document.getElementById('Camera');
Webcam.attach('#Camera');

function takeSnapshot(){

Webcam.snap(function(data_uri){
document.getElementById('Result').innerHTML = '<img id="poopiserveriji" src="'+data_uri+'"/>';

});

}

console.log("ml5version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vZgFNKJCm/model.json', modelLoadedLUL);
function modelLoadedLUL(){

console.log("model is loaded now go play minecraft :D");    
}

prediction_1 = "";


function speak(){

var synth = window.speechSynthesis;
SpeechDahTah1 = "The Prediction is ="+prediction_1;

var utterThis = new SpeechSynthesisUtterance(SpeechDahTah1);
synth.speak(utterThis);

}

function checkImage (){

img = document.getElementById("poopiserveriji");
classifier.classify(img, gotResult);

}
function gotResult(error, results){
  
  if(error){
    console.error(error);
  }
  else{

console.log(results);
document.getElementById("Emotion_Name1").innerHTML = results[0].label;


prediction_1 = results[0].label;


speak();

if(results[0].label == "OKEH."){

document.getElementById("Emoji1").innerHTML = "&#128076;";


}

if(results[0].label == "GOOD."){

  document.getElementById("Emoji1").innerHTML = "&#128077;";
  
  
  }

  if(results[0].label == "PEACE."){

    document.getElementById("Emoji1").innerHTML = "&#9996;";
    
    
    }
  

    

  }

}