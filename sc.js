var arr = [
    { songname: "My-life-is-in-the-town", url: "./song/My-life-Is-In-This-Town.mp3", img: "./images/an.jpg" },
    { songname: "Butterfly", url: "./song/butterfly.mp3", img: "./images/buter.jpg" },
    { songname: "Ban Ja Rani", url: "./song/Ban Ja Rani.mp3", img: "./images/ban.jpg" },
    { songname: "Heeriye", url: "./song/Heeriye.mp3", img: "./images/hee.jpg" },
    { songname: "Baby Girl", url: "./song/Baby Girl.mp3", img: "./images/ban.jpg" },
    { songname: "Coca Cola Tu", url: "./song/Coca Cola Tu.mp3", img: "./images/hee.jpg" },
    { songname: "Dheeme-Dheeme", url: "./song/Dheeme-Dheeme.mp3", img: "./images/buter.jpg" },
    { songname: "Lalla Lalla Lori", url: "./song/Lalla Lalla Lori.mp3", img: "./images/hee.jpg" },
    { songname: "She Move it Like", url: "./song/She Move it Like.mp3", img: "./images/an.jpg" },
    { songname: "Tu Meri", url: "./song/Tu Meri.mp3", img: "./images/ban.jpg" },
]

var allsong = document.querySelector('.allsong')
var audio = new Audio()
var left = document.querySelector('.left')
var playbutton = document.querySelector('#playbutton')
var back = document.getElementById('back')
var forward = document.querySelector('#forward')

var mute = document.querySelector('#mute')
var selectedsong = 0;
var like=document.querySelector('h6')

function mainfun() {

    var clutter = ""
    arr.forEach(function (ele, idx) {
        clutter += `  <div class="songcard" id=${idx} >
    <div class="part1">
        <img src="${ele.img}"
            alt="">
        <h2>${ele.songname}</h2>
    </div>
    <h6 onclick="love()"> <i id="like" class="ri-heart-3-line"></i></h6>

</div>`
    })

    audio.src = arr[selectedsong].url;
    allsong.innerHTML = clutter
    left.style.backgroundImage = `url(${arr[selectedsong].img})`
}
mainfun()

var check=0;
function love(){
    if (check == 0) {
            
                like.classList.remove('ri-heart-3-line')
               like.classList.add('ri-heart-3-fill')
                like.style.color = 'red'
                like.style.scale = "1.2"
                check = 1
            }
            else {
                like.classList.remove('ri-heart-3-fill')
                like.classList.add('ri-heart-3-line')
                like.style.color = 'black'
                like.style.scale = "1"
                check = 0
            }
}


allsong.addEventListener("click", function (dets) {
    // console.log(dets.target.id)
    // console.log(arr[dets.target.id]) //arr[0].songname
    selectedsong = dets.target.id
    // playbutton.innerHTML = `<i class="ri-pause-fill"></i>`;
    playbutton.classList.remove('ri-play-fill');
    playbutton.classList.add('ri-pause-fill');
    // check=1;
    mainfun()
    audio.play()
})


// playbutton.addEventListener("click", function () {
//     if (check == 0) {
//         playbutton.innerHTML = `<i class="ri-pause-fill"></i>`;
//         mainfun(); 
//         audio.play();
//         check = 1;
//     } else {
//         playbutton.innerHTML = `<i class="ri-play-fill"></i>`;
//         mainfun(); 
//         audio.pause();
//         check = 0;
//     }
// });



playbutton.addEventListener("click", function () {
    if (playbutton.classList.contains('ri-play-fill')) {
        playbutton.classList.remove('ri-play-fill');
        playbutton.classList.add('ri-pause-fill');
        mainfun()
        audio.play();
    } else {
        playbutton.classList.remove('ri-pause-fill');
        playbutton.classList.add('ri-play-fill');
        audio.pause();
    }
});

forward.addEventListener('click', function () {
    playbutton.classList.remove('ri-play-fill');
    playbutton.classList.add('ri-pause-fill');
    if (selectedsong < arr.length - 1) {
        selectedsong++
        mainfun()
        audio.play()
    }
    else {
        forward.style.opacity = 0.5
    }

})
back.addEventListener('click', function () {
    playbutton.classList.remove('ri-play-fill');
    playbutton.classList.add('ri-pause-fill');
    if (selectedsong >= 0) {

        selectedsong--
        mainfun()
        audio.play()

    }
    else {
        back.style.opacity = 0.5
    }
})


// like.addEventListener("click", function double(dets) {
//     if (check == 0) {
//         selectedsong = dets.target.id
//         like.classList.remove('ri-heart-3-line')
//         like.classList.add('ri-heart-3-fill')
//         like.style.color = 'red'
//         like.style.scale = "1.2"
//         check = 1
//     }
//     else {
//         like.classList.remove('ri-heart-3-fill')
//         like.classList.add('ri-heart-3-line')
//         like.style.color = 'black'
//         like.style.scale = "1"
//         check = 0
//     }

// })

