const audios = document.querySelectorAll('audio');


document.addEventListener('keydown', (e) => {
    e.preventDefault();

    
    audios.forEach(function(audio) {
        if(e.code.toString() === audio.dataset.key) {
            audio.currentTime = 0;
            audio.play();
            
            document.getElementById(e.which).parentElement.classList.add('playing');
        }
    });

});