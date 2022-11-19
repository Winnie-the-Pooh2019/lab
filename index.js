$(document).ready(() => {
    const crash = new Audio('./sounds/crash.mp3');
    const kickBass = new Audio('./sounds/kick-bass.mp3');
    const snare = new Audio('./sounds/snare.mp3');
    const tom1 = new Audio('./sounds/tom-1.mp3');
    const tom2 = new Audio('./sounds/tom-2.mp3');
    const tom3 = new Audio('./sounds/tom-3.mp3');
    const tom4 = new Audio('./sounds/tom-4.mp3');

    function play(keyCode) {
        switch (keyCode) {
            case 'w':
                crash.currentTime = 0;
                crash.play();
                break;

            case 'a':
                kickBass.currentTime = 0;
                kickBass.play();
                break;

            case 's':
                snare.currentTime = 0;
                snare.play();
                break;

            case 'd':
                tom1.currentTime = 0;
                tom1.play();
                break;

            case 'j':
                tom2.currentTime = 0;
                tom2.play();
                break;

            case 'k':
                tom3.currentTime = 0;
                tom3.play();
                break;

            case 'l':
                tom4.currentTime = 0;
                tom4.play();
                break;

            default:
                break;
        }
    }

    $(document).keydown((event) => {
        play(event.key);
    });

    $('.drum').click((e) => {
        play(e.target.innerText);
    });
});