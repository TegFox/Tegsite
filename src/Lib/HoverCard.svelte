<script>
    import Card from "./Card.svelte";

    export let color
    export let overlayColor
    export let borderRadius = '16px'
    export let padding = '3rem 2rem'

    let height

</script>

<div class="hovercard"
     style:border-radius={borderRadius}
     style:padding
     style={`--color: ${color};  --overlay-color: ${overlayColor}; --border-radius: ${borderRadius};`}
     >
    <slot/>
</div>


<style>

    :root {
        --transition: all 0.25s ease;

    }

    .hovercard {
        background: var(--color);
        position: relative;
        z-index: 1;
        transition: var(--transition);
        border-radius: var(--border-radius);
    }

    .hovercard:before {
        background: var(--overlay-color);
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        transition: var(--transition);
        border-radius: var(--border-radius);
    }

    .hovercard:hover:before {
        opacity: 1;
    }

    .hovercard:hover {

    }

    @media only screen and (max-device-width: 600px) {
        .hovercard {
            background: var(--overlay-color);
        }
    }

</style>