// Animation for search bar
var searchInputs = document.getElementsByClassName('searchInput');
var phrases = ['Looking for something?  ', 'Buy anything ', 'All you want is here '];
var i = 0;
var j = 0;
var currentPhrase = [];
var isDeleting = false;
var isEndOfPhrase = false;
var intervalId;

function loop() {
    isEndOfPhrase = false;

    for (var k = 0; k < searchInputs.length; k++) {
        searchInputs[k].placeholder = currentPhrase.join('');
    }

    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }

        if (j == phrases[i].length) {
            isEndOfPhrase = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEndOfPhrase ? 2000 : isDeleting ? spedUp : normalSpeed;
    intervalId = setTimeout(loop, time);
}

for (var k = 0; k < searchInputs.length; k++) {
    searchInputs[k].addEventListener('focus', function () {
        clearInterval(intervalId);
        this.placeholder = '';
    });

    searchInputs[k].addEventListener('blur', function () {
        intervalId = setTimeout(loop, 0);
    });
}
loop();

// Add shadow to navbar when scrolling
window.onscroll = function () {
    var navbar = document.getElementById('navbar');
    var breadcrumb = document.getElementById('breadcrumb');
    if (window.pageYOffset > 65) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
};

