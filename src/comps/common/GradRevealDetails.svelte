<script>
    import Card from "../../lib/Card.svelte";

    export let borderRadius = '16px'
    export let img
    export let height = 'auto'
    export let maxHeightDelta
    export let contain
</script>

<Card padding="0" {img} {height} {borderRadius} {contain}>
    <div class="grad" style="--gradrevealdetails-max-height-delta: {maxHeightDelta};
                             --gradrevealdetails-border-radius: calc({borderRadius} - 1px);">
        <div class="container">
            <div class="above">
                <slot name="above"/>
            </div>
            <div class="hidden">
                <slot name="hidden"/>
            </div>
            <div class="below">
                <slot name="below"/>
            </div>
        </div>
    </div>
</Card>

<style>

    :root {
        --gradrevealdetails-transition: 0.4s;
        --gradrevealdetails-transition-fast: 0.3s cubic-bezier(0, 0.5, 0.5, 1);
        --gradrevealdetails-background: linear-gradient(transparent 50%, #00000088 75% ,#000000dd);
        --gradrevealdetails-overlay: linear-gradient(transparent 20%, #00000088 60% ,#000000aa);
    }

    .above {
        transition: var(--gradrevealdetails-transition);
    }

    .grad:hover .above {
        transform: translate3d(0, 0, 0);
    }

    .hidden {
        opacity: 0;
        max-height: 0;
        transform: translate3d(0, 10px, 0);
        transition: var(--gradrevealdetails-transition);
    }

    .grad:hover .hidden {
        opacity: 100%;
        max-height: var(--gradrevealdetails-max-height-delta);
        transform: translate3d(0, 0, 0);
    }

    .below {

    }

    .container {
        padding: 2rem;
        position: absolute;
        bottom: 0;
    }

    .grad {
        width: 100%;
        height: 100%;
        background: var(--gradrevealdetails-background);
        border-radius: var(--gradrevealdetails-border-radius);
        position: relative;
        z-index: 1;
        transition: var(--gradrevealdetails-transition);
    }

    .grad:before {
        background: var(--gradrevealdetails-overlay);
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        border-radius: var(--gradrevealdetails-border-radius);
        transition: var(--gradrevealdetails-transition);
    }

    .grad:hover:before {
        opacity: 1;
    }

    .grad:hover {
        filter: var(--hovercard-overlay-filter)
    }

</style>
