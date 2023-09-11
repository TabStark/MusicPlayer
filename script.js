let currentMusic = 0;

const music = document.querySelector("#audio")

const seekBar = document.querySelector(".seek-bar")
const songName = document.querySelector(".music-name")
const artistName = document.querySelector(".artist-name")
const disk = document.querySelector(".disk")
const currentTime = document.querySelector(".current-time")
const musicDuration = document.querySelector(".song-duration")
const playBtn = document.querySelector(".Play")
const forwardBtn = document.querySelector(".forward")
const backwardBtn = document.querySelector(".backward")
const icon = document.getElementById('icon')


const firstSong = document.getElementById("firstSong")
const secondSong = document.getElementById("secondSong")
const thirdSong = document.getElementById("thirdSong")
const forthSong = document.getElementById("forthSong")
const fifthSong = document.getElementById("fifthSong")
const sixSong = document.getElementById("sixSong")
const seventhSong = document.getElementById("seventhSong")
const eightSong = document.getElementById("eightSong")
const ninthSong = document.getElementById("ninthSong")
const tenthSong = document.getElementById("tenthSong")
const eleventhSong = document.getElementById("eleventhSong")
const songname = document.querySelectorAll("songname")

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const fivee = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight= document.getElementById("eight")
const nine= document.getElementById("nine")
const ten = document.getElementById("ten")
const eleven = document.getElementById("eleven")


const array = [one, two, three, four, fivee, six, seven, eight, nine, ten, eleven]



playBtn.addEventListener('click', () => {
   
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause')
        music.play();
    } else {
        icon.classList.add('fa-play');
        icon.classList.remove('fa-pause')
        music.pause();
    }
})

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;
    for (let i of array) {
        i.style.color="white"
    }
    array[i].style.color="rgb(63, 185, 63)"
    
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
    

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML =formatTime(music.duration);
    }, 300);

    
}

setMusic(0);

firstSong.addEventListener('click', ()=>{
   
    setMusic(0)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()
           
})
secondSong.addEventListener('click', ()=>{
    setMusic(1)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()
     
})
thirdSong.addEventListener('click', ()=>{
    setMusic(2)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()
    
})
forthSong.addEventListener('click', ()=>{
    setMusic(3)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

    
})
fifthSong.addEventListener('click', ()=>{
    setMusic(4)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})
sixSong.addEventListener('click', ()=>{
    setMusic(5)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})
seventhSong.addEventListener('click', ()=>{
    setMusic(6)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})
eightSong.addEventListener('click', ()=>{
    setMusic(7)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})
ninthSong.addEventListener('click', ()=>{
    setMusic(8)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})
tenthSong.addEventListener('click', ()=>{
    setMusic(9)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})
eleventhSong.addEventListener('click', ()=>{
    setMusic(10)
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play()

})

const formatTime = (time)=>{
    let min = Math.floor(time/60)
    if(min<10){
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`
}


setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime)
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        forwardBtn.click();
    }
}, 500);

seekBar.addEventListener('change', ()=>{
    music.currentTime = seekBar.value;
})


const playMusic = ()=>{
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause')
    music.play();
}
forwardBtn.addEventListener('click', ()=>{
    if(currentMusic >= songs.length -1){
        currentMusic = 0
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();

})

backwardBtn.addEventListener('click', ()=>{
    if(currentMusic <= 0){
        currentMusic = songs.length-1
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();  

})

function searchFunction() {
    let search = document.getElementById("search").value;
    search = search.toLowerCase();
    let p = document.getElementsByClassName("songname");

    for(i=0; i<p.length; i++){
        if (!p[i].innerHTML.toLowerCase().includes(search)){
            p[i].style.display="none";
        } else {
            p[i].style.display="list-item"
        }
    }
}