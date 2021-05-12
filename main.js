var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()
function start () {
    document.getElementById("textbox").innerHTML = ""
    Recognition.start()
}
Recognition.onresult = function (event) {
    console.log(event)
    output = event.results[0][0].transcript
 document.getElementById("textbox").innerHTML = output
 speak()
}
function speak () {
    Synthesis = window.speechSynthesis
    data = document.getElementById("textbox").value 
    utter =  new SpeechSynthesisUtterance(data)
    Synthesis.speak(utter)
    Webcam.attach("#camera")
}
Webcam.set ({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
