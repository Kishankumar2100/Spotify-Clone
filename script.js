console.log("Welcome to Spotify")
let songIndex = 0;
let audioElement = new Audio('music.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let songs = [
    {songName: "Chand Baaliyaan", filePath: "music.mp3", coverPath: "cover/poster.jpg"},
    {songName: "Alag Aasmaan",    filePath: "songs/music 2.mp3", coverPath: "cover/cover 2.jpg"},
    {songName: "Jag Ghoomeya",    filePath: "songs/music 3.mp3", coverPath: "cover/cover 3.jpg"},
    {songName: "Kya Mujhe Pyaar Hai", filePath: "songs/music 4.mp3", coverPath: "cover/cover 4.jpg"},
    {songName: "Comethru", filePath: "songs/music 5.mp3", coverPath: "cover/cover 5.jpg"},
    {songName: "Maiyya Mainu", filePath: "songs/music 6.mp3", coverPath: "cover/cover 6.jpg"},
    {songName: "Kasoor", filePath: "songs/music 7.mp3", coverPath: "cover77.jfif"},
    {songName: "Chand Baaliyaan 2", filePath: "music.mp3", coverPath: "cover/poster.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
gif.style.opacity = 1;
    }
   else{
    audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
}
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
//Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value* audioElement.duration/100 ;

})
