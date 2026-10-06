
/*  ---- Spela låt och spawna dansande katt-gif (och pausa och ta bort osv) ---- */

const songButton = document.querySelector("#songButton");
var song = new Audio(src="./Bilder, videor och ljud/jalda - ANIME MIG.mp3")
song.setAttribute("preload", true)
song.setAttribute("loop", true)

playing = false

songButton.addEventListener("click", function(){
    
    const favoriter = document.querySelector("article.favoriter")

    var dancingCatGif = new Image()
    dancingCatGif.setAttribute("src","./Bilder, videor och ljud/catjam-cat.gif" )
    dancingCatGif.setAttribute("width", 397)
    dancingCatGif.setAttribute("height", 498)
    dancingCatGif.setAttribute("alt", "En katts ansikte som gungar fram och tillbaka och dansar i ett ljus som ändras mellan regnbågens färger")
    dancingCatGif.classList.add("dancingCat")
    

    if (playing){
        song.pause()
        playing = false
        /* Ta bort bilden */
        dancingCatGif = favoriter.querySelector(".dancingCat")
        favoriter.removeChild(dancingCatGif)
        /* Ändra knapptexten */
        songButton.innerText = "Spela ANIME MIG av Jalda"
        /* Ändra temat till vanligt */
        favoriter.classList.remove("dance")
   
    }else{

        songButton.innerText = "Pausa ANIME MIG"
        song.play()
        playing = true
        favoriter.appendChild(dancingCatGif)
        favoriter.classList.add("dance")
    }
})
