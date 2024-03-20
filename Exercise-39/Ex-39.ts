// Definig the objects types 
interface myAlbum {
    artist: string;
    title: string;
    tracks?: number;
}

// creating a function for Music Album
function make_album(artist: string, title: string, tracks?: number): myAlbum {
    let album: myAlbum = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}


let show_album1 = make_album('Atif Aslam', 'Mustafa Jaan e Rehmat');
let show_album2 = make_album('Owais raza', 'Aaqa Ka Milad Aaya', 10);
let show_album3 = make_album('Junaid Jamshed', 'Badr-ud-Duja');

console.log(show_album1);
console.log(show_album2);
console.log(show_album3);