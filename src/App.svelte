<script>
    import Beat from './Beat.svelte';
    import Navigation from './Navigation.svelte';
    import Play from './Play.svelte';
    import {storeNavigation} from './stores.js';
    import {fade} from 'svelte/transition';

    let menu;

    storeNavigation.subscribe(value => {
        menu = value;
    });
</script>

<style type="text/scss">
    .title {
        margin: 0 0 20px;
        width: 100%;
        text-align: center;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;

        .beat {
            width: 33%;
            border: #666666 1px solid;
        }
    }
</style>

<h1 class="title">METRONOME</h1>

<Navigation></Navigation>

<div class="wrapper">
    {#if menu === 'beat'}
        <div class="beat" in:fade="{{duration: 200, delay: 200}}" out:fade="{{duration: 1}}">
            <Beat></Beat>
        </div>
    {:else}
        <div class="play" in:fade="{{duration: 200, delay: 200}}" out:fade="{{duration: 1}}">
            <Play></Play>
        </div>
    {/if}
</div>




