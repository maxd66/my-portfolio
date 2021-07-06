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

document.getElementById('resume-link').addEventListener('click', function() {
    if(confirm('You will now be taken to a seperate page for the pdf of my resume. If you would like to return to the portfolio, please select cancel.')) {
        window.location = './assets/images/coding-resume.pdf'
    }
})

window.onload = fadeIn();