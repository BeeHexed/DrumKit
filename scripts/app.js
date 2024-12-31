const keyMap = {
    'a': 65,
    's': 83,
    'd': 68,
    'f': 70,
    'g': 71,
    'h': 72,
    'j': 74,
    'k': 75,
    'l': 76
};

window.addEventListener('keydown', function (e) {
    const dataKey = keyMap[e.key.toLowerCase()]; 
    if (!dataKey) return; 
    
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);
    if (!audio) return; 

    key.classList.add('playing');
    
    audio.currentTime = 0; 
    audio.play(); 

    audio.addEventListener('ended', function () {
        key.classList.remove('playing');});
});

const keys = document.querySelectorAll('.key'); 

keys.forEach(key => {
    key.addEventListener('click', function () {
        const dataKey = key.getAttribute('data-key'); 
        
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
        if (!audio) return; 

        key.classList.add('playing');
        
        audio.currentTime = 0;
        audio.play(); 

        audio.addEventListener('ended', function () {
            key.classList.remove('playing');
        });
    });
});
