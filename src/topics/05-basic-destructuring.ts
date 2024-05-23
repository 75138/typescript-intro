interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  song: "Mess",
  songDuration: 36,
  details: {
    author: 'Ed Sheeran',
    year: 2015
  }
}

/*const {
  song: anotherSong,
  songDuration: duration,
  details
} = audioPlayer;

const { author, year } = details

console.log('song: ', anotherSong)
console.log('duration: ', duration)
console.table({'song': anotherSong, 'duration:': duration, author, year})*/

const [,,trunks,p4]: string[] = ['Goku', 'Vegeta', 'Trunks']


console.table({'Personaje': p4 || 'No encontrado.'})

export {};