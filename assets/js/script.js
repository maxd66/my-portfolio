function fadeIn() {
    var visibility = 0;
    var target = document.getElementById('header-quote');
    var fadeInterval = setInterval(function () {
        if(visibility < 1) {
            visibility = visibility + .0125;
            target.style.opacity = visibility;
        } else {
            clearInterval(fadeInterval);
        }
    }, 30)
}

window.onload = fadeIn();