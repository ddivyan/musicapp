
const play = document.getElementById("play");
const music = document.querySelector('audio');
const image = document.querySelector('img');
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs=[
  {
    name :"Divya1",
    title: "Lut Gaye",
    artist: "Jubin Nautiyal",
  },
  {
    name :"Divya2",
    title: "Nach Rani",
    artist: "GuruRandhawa",
  },
  {
    name :"Divya3",
    title:"Khuda Haafiz",
    artist: "Vishal Dhadlani",
  },
]


let isPlaying = false;

const playMusic = ()=>{
  isPlaying = true;
   music.play();
   play.classList.replace("fa-play","fa-pause");
   image.classList.add("anime");
 };

 const pauseMusic = () =>{
  isPlaying = false;
   music.pause();
   play.classList.replace("fa-pause","fa-play");
   image.classList.remove("anime");
 };

 play.addEventListener('click',()=>{
   if(isPlaying){
     pauseMusic();
   }
   else{
     playMusic();
   }

 })

 const loadSong = (songs) =>{
   title.textContent = songs.title;
   artist.textContent = songs.artist;
   music.src = "audio/" + songs.name + ".mp3";
   image.src = "image/" + songs.name + ".jpg";
 };

 songIndex = 0;
 const nextSong = () => {
   songIndex = (songIndex + 1) % songs.length;
   loadSong(songs[songIndex]);
   playMusic();
 };

 const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

 next.addEventListener('click',nextSong);
 prev.addEventListener('click',prevSong);