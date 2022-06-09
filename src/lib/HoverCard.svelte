<script>
    import Card from "./Card.svelte";

    export let background
    export let overlayBackground
    export let filter = 'none'
    export let overlayFilter = 'none'

    export let borderRadius = '16px'
    export let padding = '3rem 2rem'

    let height

</script>

<div class="hovercard"
     style:padding
     style={`--hovercard-background: ${background};  --hovercard-overlay-background: ${overlayBackground};
     --hovercard-border-radius: ${borderRadius}; --hovercard-filter: ${filter};
     --hovercard-overlay-filter: ${overlayFilter};`}
     >
    <slot/>
</div>


<style>

    :root {
        --hovercard-transition: all 0.2s ease;

    }

    .hovercard {
        background: var(--hovercard-background);
        position: relative;
        z-index: 1;
        transition: var(--hovercard-transition);
        border-radius: var(--hovercard-border-radius);
        filter: var(--hovercard-filter)
    }

    .hovercard:before {
        background: var(--hovercard-overlay-background);
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        transition: var(--hovercard-transition);
        border-radius: var(--hovercard-border-radius);
    }

    .hovercard:hover:before {
        opacity: 1;
    }

    .hovercard:hover {
        filter: var(--hovercard-overlay-filter)
    }

    @media only screen and (max-device-width: 1366px) {
        .hovercard {
            background: var(--hovercard-overlay-background);
        }
    }

</style>
