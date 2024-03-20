// creating a function for Music Album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var show_album1 = make_album('Atif Aslam', 'Mustafa Jaan e Rehmat');
var show_album2 = make_album('Owais raza', 'Aaqa Ka Milad Aaya', 10);
var show_album3 = make_album('Junaid Jamshed', 'Badr-ud-Duja');
console.log(show_album1);
console.log(show_album2);
console.log(show_album3);
