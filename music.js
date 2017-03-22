function Artist(name) {
  this.name = name;
  this.songs = [];
}

Artist.prototype.addSong = function(song) {
  this.songs.push(song);
}

function Song(title, artist) {
  this.title = title || 'untitled';
  this.artist = artist;
  this.playCount = 0;
}


var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
var beatIt = new Song("Beat It", vanHalen);
var theBeatles = new Artist("The Beatles");
var loveMeDo = new Song("Love Me Do", theBeatles);
console.log(vanHalen);
console.log(theBeatles);


vanHalen.addSong(jump);
theBeatles.addSong(loveMeDo);
