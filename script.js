console.log("Welcome to Mucify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Cartoon - On & On (ft. Daniel Levi) [NCS Release]", filePath: "songs/1.mp3", coverPath: "pics/1.jpg"},
    {songName: "Janji - Heroes Tonight (ft. Johnning) [NCS Release]", filePath: "songs/2.mp3", coverPath: "pics/2.jpg"},
    {songName: "Disfigure-Blank [NCS Release]", filePath: "songs/3.mp3", coverPath: "pics/3.jpg"},
    {songName: "Cartoon - Why We Lose (ft. Coleman Trapp) [NCS Release]", filePath: "songs/4.mp3", coverPath: "pics/4.jpg"},
    {songName: "Unknown Brain - Superhero (ft. Chris Linton) [NCS Release]", filePath: "songs/5.mp3", coverPath: "pics/5.jpg"},
    {songName: "Sub Urban - Cradles [NCS Release]", filePath: "songs/6.mp3", coverPath: "pics/6.jpg"},
    {songName: "Robin Hustin x TobiMorrow - Light It Up (ft. Jex) [NCS Release]", filePath: "songs/7.mp3", coverPath: "pics/7.jpg"},
    {songName: "Desmeon - Hellcat [NCS Release]", filePath: "songs/8.mp3", coverPath: "pics/8.jpg"},
    {songName: "Warriyo - Mortals (feat. Laura Brehm) [NCS Release]", filePath: "songs/9.mp3", coverPath: "pics/9.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/10.mp3", coverPath: "pics/10.jpg"},
    {songName: "[Bonus Song] - Erhling - Dance With me", filePath: "songs/11.mp3", coverPath: "pics/11.jpeg"},
    {songName: "[Bonus Song] - GTA V Radio [Non-Stop-FM] Living In A Box", filePath: "songs/12.mp3", coverPath: "pics/12.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

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
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})