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

// print when a team member is clicked
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.team-member').forEach(function(teamMember) {
        teamMember.addEventListener('click', function() {
            var infoText = teamMember.getAttribute('data-info');

            // split the text by the comma
            var infoArray = infoText.split(',');

            // set as list in class 'member-info'
            var memberInfo = document.querySelector('.member-info');
            memberInfo.innerHTML = '';
            infoArray.forEach(function(info) {
                var listItem = document.createElement('li');
                listItem.innerHTML = info;
                memberInfo.appendChild(listItem);
            });


            // set the button to a darker color
            teamMember.style.backgroundColor = '#323';
            // reset the color of the other buttons
            document.querySelectorAll('.team-member').forEach(function(member) {
                if (member !== teamMember) {
                    member.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
            });
        });
    });
});

// make videos only play when visible
document.addEventListener('scroll', function() {
    document.querySelectorAll('.video').forEach(function(video) {
        var videoPosition = video.getBoundingClientRect().top;
        var videoHeight = video.offsetHeight;
        var windowPosition = window.innerHeight;

        if (videoPosition < windowPosition && videoPosition + videoHeight > 0) {
            video.play();
        } else {
            video.pause();
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.responsive-media').src = 'https://mbermanucsc.github.io/Through-The-Fog/';
    }
    else {
        document.querySelector('.game').style.display = 'none';
    }
});

// set up download section on page load
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 1);
});