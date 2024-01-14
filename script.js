console. log("Welcome to Houxxzik");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif');

let songs = [
    {songName: "HEY YO", filepath: "song/1.mp3", coverPath: "covers/EDM.webp"},
    {songName: "Flowers", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Flowers", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Flowers", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Flowers", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Flowers", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Flowers", filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
] 


// audioElement.play();

// Handle play/pause click;
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('a-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})
