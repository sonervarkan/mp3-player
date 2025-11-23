# Music Player

A simple, interactive Music Player web application built with HTML, CSS, and vanilla JavaScript, allowing users to play, pause, stop, and switch between multiple songs. The UI dynamically updates the track image, title, and artist.

## Features

Play / Pause / Stop controls

Next & Previous track navigation

Dynamic UI updates (artist, title, album image)

Audio auto-loading for each track

Clean and simple layout

No external libraries required

## Project Structure
```
Music-Player
 ├── index.html
 ├── script.js
 ├── style.css
 ├── img/
 │    ├── nur-yoldas.jpg
 │    ├── pamela1.jpg
 │    └── pamela2.jpg
 └── musics/
      ├── Sultan ı yegah.mp3
      ├── Konuşsana Bir Tanem.mp3
      └── Ağla Halime.mp3
```
## Technologies Used

HTML5

CSS3

JavaScript (DOM Manipulation + Audio API)

## How It Works
### Music Class

Each song contains:

singer

title

cover image

audio file

class Music {
    constructor(singer, title, image, part) {
        this.title = title;
        this.singer = singer;
        this.image = image;
        this.part = part;
    }
}

## Music Player Logic

Loads the selected track

Updates the <audio> source

Updates image, title, and singer

Handles audio controls

function letsPlay(index) {
    let pict = `<img src="${player1.musicList[index].image}" >`;
    picture.innerHTML = pict;
    title.innerText = player1.musicList[index].title;
    singer.innerText = player1.musicList[index].singer;

    let nextMusic = `<source src="${player1.musicList[index].part}">`;
    audioplayer.innerHTML = nextMusic;

    audioplayer.load();
    pause.classList.add("passive");
    play.classList.remove("passive");
}

## Setup & Usage

Download or clone the project.

Make sure your /img and /musics folders contain the correct files.

Open index.html in any web browser.

Click Start to load the player.

Enjoy your music!

## UI Preview Components

Track image

Artist name

Song title

Audio controls (back, play, pause, stop, next)

## License

This project currently does not include a license.

