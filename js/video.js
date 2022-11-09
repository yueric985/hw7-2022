var video;
 
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

document.querySelector('#play').addEventListener("click", function(){
	console.log("play video")
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	video.play()
})

document.querySelector('#pause').addEventListener("click", function(){
	console.log("pause video")
	// document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	video.pause()
})	          

document.getElementById("slower").addEventListener("click", function(){ 
	video.playbackRate *= 0.9; 
	console.log("speed is: " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function(){ 
	video.playbackRate /= 0.9; 
	console.log("speed is: " + video.playbackRate);
	//console.log(video.currentTime);
});

document.getElementById("skip").addEventListener("click", function(){ 
	if(video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	console.log("time is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == true){
		console.log("Unmute");
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else{
		console.log("Mute");
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

document.getElementById("slider").addEventListener("change", function(){ 
	video.volume =  document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + '%';
});

document.querySelector("#vintage" ).addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("Old school");
});


document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("Original");
});



