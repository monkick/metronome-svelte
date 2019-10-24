<div class="wrapper">
    <div class="number">{beat}</div>
    <div class="control">
        <button class="btn" on:click={increment}>+</button>
        <button class="btn" on:click={decrement}>-</button>
    </div>
</div>

<style type="text/scss">
    .wrapper {
        width: 100%;
        padding: 20px 60px;

        .number {
            padding: 0;
            width: 100%;
            font-size: 80px;
            color: red;
            text-align: center;
        }

        .control {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;

            .btn {
                padding: 40px;
                font-size: 40px;
            }
        }
    }
</style>

<script>
    import { storeBeat } from './stores.js';

    let beat;

    storeBeat.subscribe(value => {
        beat = value;
    });

    function increment () {
        storeBeat.update(n => n + 1);
    }

    function decrement () {
        storeBeat.update(n => n - 1);
    }
</script>
