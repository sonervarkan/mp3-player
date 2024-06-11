const start=document.querySelector(".start");
const music=document.querySelector(".music");
const picture=document.querySelector(".image");
const title=document.querySelector(".title");
const singer=document.querySelector(".singer");
const audioplayer=document.querySelector(".audioplayer");
const backward=document.querySelector(".fa-backward");
const play=document.querySelector(".fa-play");
const pause=document.querySelector(".fa-pause");
const stop=document.querySelector(".fa-stop");
const forward=document.querySelector(".fa-forward");
var index=0;

class Music{
    constructor(singer,title,image,part){
        this.title=title;
        this.singer=singer;
        this.image=image;
        this.part=part;
    }

}

const musicList=[
    new Music("Nur Yoldas","Sultaniyegah","./img/nur-yoldas.jpg","./musics/Sultan ı yegah.mp3"),
    new Music("Pamela","Konuşsana Birtanem","./img/pamela1.jpg","./musics/Konuşsana Bir Tanem.mp3"),
    new Music("Pamela", "Ağla Halime","./img/pamela2.jpg","./musics/Ağla Halime.mp3")
];


class MusicPlayer{
    constructor(musicList){
        this.musicList=musicList;
    }
}   


const player1=new MusicPlayer(musicList);
//console.log(player1.musicList);



start.addEventListener("click",()=>{
    music.classList.toggle("passive");
    start.classList.toggle("passive");
    letsPlay(index);
});

function letsPlay(index){
    let pict=`<img src="${player1.musicList[index].image}" >`;
    picture.innerHTML=pict;
    title.innerText=player1.musicList[index].title;
    singer.innerText=player1.musicList[index].singer;
    let nextMusic=`<source src="${player1.musicList[index].part}">`;
    audioplayer.innerHTML=nextMusic;
    audioplayer.load();
    pause.classList.add("passive");
    play.classList.remove("passive"); 
}


play.addEventListener("click",function(){
    audioplayer.play();
    play.classList.toggle("passive");
    pause.classList.remove("passive");
});

pause.addEventListener("click",()=>{
    audioplayer.pause();
    play.classList.remove("passive");
    pause.classList.toggle("passive");
});
stop.addEventListener("click",function(){
    audioplayer.pause();
    audioplayer.currentTime=0; 
    play.classList.remove("passive");
    pause.classList.add("passive");
});
forward.addEventListener("click",()=>{
    if (index!=player1.musicList.length-1){
        index++;
    }else{
        index=0;
    }
    letsPlay(index);      
});

backward.addEventListener("click",()=>{
    index--;
    if (index<0){
        index=player1.musicList.length-1;
    }
    letsPlay(index);     
});

