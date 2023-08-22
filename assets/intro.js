function startIntro (){
    var width = window.innerWidth;

    if (width < 1280) {
        introCovil.playSegments([0, 160],true)
    } else if (width > 1440){
        logoCovil.playSegments([0, 60],true)
    }
}

startIntro()