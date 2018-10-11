const audios = document.querySelectorAll('audio');


document.addEventListener('keydown', (e) => {

    audios.forEach(function(audio) {
        if(e.keyCode.toString() === audio.dataset.key) {
            audio.currentTime = 0;
            audio.play();
            
            document.getElementById(e.which).parentElement.classList.add('playing');
        }
    });

});

document.addEventListener('keyup', (e) => {
    
    audios.forEach(function(audio) {
        if(e.keyCode.toString() === audio.dataset.key) {
            document.getElementById(e.keyCode).parentElement.classList.remove('playing');
        }
    });
});


document.addEventListener('click', (e) => {

    if (e.target.nodeName === 'A') {
        audios.forEach(function(audio) {
            if(e.target.id === audio.dataset.key) {
                audio.currentTime = 0;
                audio.play();
            }
        });
    }
});