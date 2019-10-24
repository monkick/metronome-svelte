<style type="text/scss">
    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        padding: 0;
        width: 100%;
        list-style: none;

        .menu {
            margin: 0 5px;
            padding: 0;
            font-size: 14px;

            &.active {
                color: darkblue;
                font-weight: bold;
            }
        }
    }
</style>

<ul class="navigation">
    <li class="menu" class:active="{menu === 'beat'}" on:click={navigationBeat}>BEAT</li>
    <li class="menu" class:active="{menu === 'play'}" on:click={navigationPlay}>PLAY</li>
</ul>

<script>
    import {storeNavigation} from './stores.js';

    let menu;

    storeNavigation.subscribe(value => {
        menu = value;
    });

    function navigationBeat () {
        storeNavigation.update(n => n = 'beat');
    }

    function navigationPlay () {
        storeNavigation.update(n => n = 'play');
    }
</script>
