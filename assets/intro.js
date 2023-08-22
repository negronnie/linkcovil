function start (){
    var width = window.innerWidth;

    introIntro = document.getElementById('introCovil')

// switch (width) {
//     case (width < 1280):
//         introCovil.playSegments([0, 160],true)
        
//         console.log("mobile")
//         break;

//     default:
//         logoCovil.playSegments([0, 60],true)
//         console.log("web")
//         break;
// }



    if (width < 1280) {
        introCovil.playSegments([0, 160],true)
        console.log("mobile")
    } else {
        
        logoCovil.playSegments([0, 60],true)
        introIntro.classList.add('clearIntro')
        console.log("web")
    }
}

start()