
<div class="wrapper">
    <lottie-player
            src="https://assets2.lottiefiles.com/datafiles/Zj0Lkp2k2ZLAIJvGrhgWFf8hUdHaqNOoVIDWkNlH/mute.json"
            background="transparent"
            speed="1"
            style="width: 100px; height: 100px;"
            on:click={play}
    >
    </lottie-player>
</div>

<style type="text/scss">
    .wrapper {
        width: 100%;
        padding: 20px 60px;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import AudioClass from './Audio';

    let player;
    let audio;
    let isPlay;
    const isPlayStore = writable(false);

    onMount(() => {
        player = document.querySelector('lottie-player');

        player.addEventListener('frame', data => {
            const seeker = data.detail.seeker;

            if (isPlay === true && seeker > 50) {
                player.pause();
            }
        });

        audio = new AudioClass();
    });

    function play() {
        isPlay = isPlay !== true;
        isPlayStore.set(isPlay);
        player.play();
    }

    isPlayStore.subscribe(value => {
        if (value === true) {
            audio.play();
        } else {
            if (audio) audio.stop();
        }
    });

</script>
