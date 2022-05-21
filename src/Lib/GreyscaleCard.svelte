<script>
    import Card from "./Card.svelte";

    export let base = '100%'
    export let background = '#222222'
    export let overlay
    export let height = 'auto'

    let fbg

    if (overlay) {
        fbg = `linear-gradient(${overlay}, ${overlay}), ${background}`
    } else {
        fbg = background
    }

</script>
<div class="greyscale-card-outer" style={`--greyscale-card-base: ${base}`} style:height>
    <Card background={fbg}>
        <slot/>
    </Card>
</div>

<style>

    :root {
        --greyscale-card-transition: 0.15s cubic-bezier(0, 0.5, 0.5, 1);
    }

    .greyscale-card-outer {
        background-size: cover;
        background-position: center;
        filter:grayscale(var(--greyscale-card-base));
        transition: var(--greyscale-card-transition);
        font-weight: bold;
    }

    .greyscale-card-outer:hover {
        filter: grayscale(0%);
    }

    @media only screen and (max-device-width: 1366px) {
        .greyscale-card-outer {
            filter: none;
        }
    }

</style>