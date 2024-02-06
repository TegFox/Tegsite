<script>
    import Card from "./Card.svelte";

    export let base = '100%'
    export let background = '#222222'
    export let img = undefined
    export let darkness = '20%'
    export let overlay
    export let height = 'auto'
    export let padding = '3rem 2rem'

    let fbg

    if (overlay) {
        fbg = `linear-gradient(${overlay}, ${overlay}), ${img ? `url(${img})` : background}`
    } else {
        fbg = background
    }

</script>
<div class="greyscale-card-outer" style={`--greyscale-card-base: ${base}`} style:height>
    <Card background={fbg} padding="0">
        <div class="greyscale-card-inner" style={`--greyscale-card-darkness: ${darkness}; --greyscale-card-padding: ${padding}`}>
            <slot/>
        </div>
    </Card>
</div>

<style>

    :root {
        --greyscale-card-transition: 0.15s cubic-bezier(0, 0.5, 0.5, 1);
    }

    .greyscale-card-outer {
        filter:grayscale(var(--greyscale-card-base));
        transition: var(--greyscale-card-transition);
    }

    .greyscale-card-outer:hover {
        filter: grayscale(0%);
    }

    .greyscale-card-inner {
        transition: var(--greyscale-card-transition);
        padding: var(--greyscale-card-padding);
        background: rgba(0, 0, 0, var(--greyscale-card-darkness))
    }

    .greyscale-card-inner:hover {
        background: transparent;
    }

    @media only screen and (max-device-width: 1366px) {
        .greyscale-card-outer {
            filter: none;
        }

        .greyscale-card-inner {
            background: rgba(0, 0, 0, 10%);
        }
    }

</style>
