// parallax effect on scroll
document.addEventListener('scroll', function() {
    document.querySelectorAll('.parallax').forEach(function(parallaxElement) {
        // can define different speeds for each parallax using data attributes
        var speed = parallaxElement.getAttribute('data-speed') || 0.14; // Default speed
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        var offset = scrollPosition * speed;
    
        parallaxElement.style.backgroundPosition = 'center calc(50% - ' + offset + 'px)';
    });
});


// set up download section on page load
document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.querySelector('#downloadButton');
    var platformSelect = document.querySelector('#platformSelect');
    var platform = navigator.platform.toLowerCase();
    var userAgent = navigator.userAgent.toLowerCase();

    // set initial dropdown value
    function setInitialDropdownValue() {
        if (platform.includes('win')) {
            platformSelect.value = 'windows';
        } else if (platform.includes('mac')) {
            platformSelect.value = 'mac';
        } else if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)) {
            platformSelect.value = 'mobile';
        } else {
            platformSelect.value = 'windows'; // default
        }
    }

    // update download button text and link
    function updateDownloadButton() {
        var selectedPlatform = platformSelect.value;
        switch (selectedPlatform) {
            case 'windows':
                downloadButton.textContent = 'Download'; // windows
                downloadButton.setAttribute('onclick', "location.href='path/to/windows/game.exe';");
                break;
            case 'mac':
                downloadButton.textContent = 'Download'; // mac
                downloadButton.setAttribute('onclick', "location.href='path/to/mac/game.dmg';");
                break;
            case 'mobile':
                downloadButton.textContent = 'Download'; // mobile
                downloadButton.setAttribute('onclick', "location.href='path/to/mobile/game.apk';");
                break;
            default:
                downloadButton.textContent = 'Download';
                downloadButton.removeAttribute('onclick');
                break;
        }
    }

    setInitialDropdownValue();
    updateDownloadButton();
    platformSelect.addEventListener('change', updateDownloadButton);

    window.scrollTo(0, 1);
});


// scene slideshow functionality
let slideIndex = 0; 
let timer = null; 

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("sceneSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    
    clearTimeout(timer); // reset the timer
    timer = setTimeout(showSlides, 5000); // change image every 5 seconds
}


function plusSlides(n) {
    slideIndex += n - 1;
    clearTimeout(timer); 
    showSlides(); 
}


document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
