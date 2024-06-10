//https://teachablemachine.withgoogle.com/models/[...]
Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
png_quality:90,
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture_image">'
    })

}
console.log("ml5verion",ml5.version)
classifier=ml5.imageClassifier("",modelloaded)
function modelloaded(){
    console.log("model has been loaded successfully")
}
prediction1=""
prediction2=""
function speak(){
    var synth=window.speechSynthesis
    speakdata1="The first prediction is"+prediction1
    speakdata2="The second prediction is"+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}