
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName")
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name:"song 1",
        title:"Mitti di Khushboo",
        artist:"Ayushmaan",
        image:"download"
    },
    {
        name:"song 2",
        title:"Sab tera",
        artist:"Neeti Mohan",
        image:"download1"
    },
    {
        name:"song 3",
        title:"Soch na Sake",
        artist:"Arijit singh",
        image:"download2"
    }
]


let isPlaying = false;

 const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play' , 'fa-pause');
    img.classList.add('anime');
};

// for pause
const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause' , 'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click' , () => {
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }

    // or
    isPlaying ? pauseMusic() : playMusic();
})

// change the music data

const loadSongs = (songs) => {
    songName.textContent = songs.title;
    artistName.textContent = songs.artist;
    music.src = "music/" +songs.name + ".mp3";
    img.src = "images/" + songs.image + ".jpg";
};

songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex +1) % songs.length;
loadSongs(songs[songIndex]);

}

const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
loadSongs(songs[songIndex]);

}

next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);


