
let currentInstrument = document.getElementById("currentInstrument");

function instrumentSound(instrumentName) {
    currentInstrument.innerText = `${instrumentName} (**play next audio after 5sec)`;
    let audio = new Audio(`./music/${instrumentName}.mp3`);
    audio.play();
    setTimeout(() => {
        audio.pause();
    }, 5000);
}



