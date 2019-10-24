export default class {



    constructor () {
        this.contextTempo = new AudioContext();

        this.tempo = 100;

        // Audio Element
        this.audioTempo = this.getAudio('./sound/s_01.mp3');
    }

    foo () {
        console.log('foo');
    }

    getAudio(path) {
        const audio = new Audio(path);
        audio.controls = true;
        return audio;
    }

    play () {
        this.interval = setInterval(() => {

            console.log(1);

            this.audioTempo.play();
        }, 60 * 1000 / this.tempo);
    }

    stop () {
        clearInterval(this.interval);
    }

}
