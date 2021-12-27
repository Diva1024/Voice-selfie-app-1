var SpeechRecognition= window.webkitSpeechRecognition;
var r = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    r.start();
}
r.onresult= function run(event){
    console.log (event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
speak();
}
function speak(){
    var synth= window.speechSynthesis;
    speakData= document.getElementById("textbox").value;
    var speakThis= new SpeechSynthesisUtterance(speakData);
    synth.speak(speakThis);
Webcam.attach(camera);
}
Webcam.set({
    width:350,
    height:250,
    image_format: 'png',
    png_quality:100
});
camera= document.getElementById("camera");