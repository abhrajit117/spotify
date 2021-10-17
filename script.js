console.log("Welcome to Spotify");

//intialize the variables
let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs= [
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"} 
    {songName: "Attention",filepath:"song/1.mp3",coverpath:"cover/1.jpg"}
]



//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
})


