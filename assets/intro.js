function start (){
    var width = window.innerWidth;

    introIntro = document.getElementById('introCovil')

    if (width < 1280) {
        introCovil.playSegments([0, 160],true)
    } else {
        logoCovil.playSegments([0, 60],true)
        introIntro.classList.add('clearIntro')
    }
}

start()