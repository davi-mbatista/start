<script>
    import SvelteLogo from './SvelteLogo';
</script>

<style>
    .splash {
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        font-size: 1rem;

        color: rgb(29, 29, 29);
    }

    mark {
        padding: 0.25em;

        border-radius: 0.35em;

        background-color: #ff3e00;
        color: white;
    }
</style>

<div class="splash">
    <SvelteLogo />
    <div>
        Open
        <mark>src/index.js</mark>
        to get started.
    </div>
</div>
