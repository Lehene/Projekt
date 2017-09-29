//Mina variabler
const video = document.getElementById("camera-stream")
const bild = document.getElementById("ta-bild")
const minCanvas = document.getElementById("MinCanvas")
const snap = document.getElementById("visa")
const spara = document.getElementById("spara-bild")
const kasta = document.getElementById("kasta-bild")

//Vad som ska hända när man klickar element m id "ta bild"
bild.addEventListener("click", () => {
console.log("Det gick att klicka")
const image = TakeSnapShot()
snap.setAttribute("src", image)
spara.setAttribute("href", image)
kasta.setAttribute("href", )
});

//Vad som ska hända när man klickar element m id "spara bild"
//spara_bild.addEventListener("click", () => {
//console.log("Det gick att spara bilden")
//});

//Min funktion
const TakeSnapShot = () => {
	const bredd = video.videoWidth;
	const höjd = video.videoHeight;
	const context = minCanvas.getContext("2d")
	minCanvas.width = bredd
	minCanvas.height = höjd
	context.drawImage(video, 0, 0, bredd, höjd)

	console.log("testar bildfunktionen")
	console.log(bredd)
	console.log(höjd)
	return minCanvas.toDataURL("image/png")
	
}
//För att hämta videoströmmen	
navigator.getMedia = (navigator.getUserMedia || 
	navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia);

navigator.getMedia( { video: true }, (stream) => {
	video.src = window.URL.createObjectURL(stream);
	video.play();
},
(err) => {
	console.error(err);
});

