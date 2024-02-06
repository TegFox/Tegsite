<script>
    export let reverse = false
    export let leftZ = 0
    export let rightZ = 0
</script>

<div class="grid" style={`--sxs-mobile-left-row: ${reverse?2:1}; --sxs-mobile-right-row: ${reverse?1:2};`}>
    <div class="grid-left" style:z-index={leftZ}>
        <slot name="left"/>
    </div>
    <div class="grid-right" style:z-index={rightZ}>
        <slot name="right"/>
    </div>
</div>

<style>

    .grid {
        display: grid;
        grid-column-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        place-items: center;
    }

    .grid-left {
        grid-column: 1;
    }

    .grid-right {
        grid-column: 2;
    }

    @media (max-width: 700px) {
        .grid {
            grid-template-columns: 1fr;
            grid-row-gap: 2rem;
        }

        .grid-left {
            grid-row: var(--sxs-mobile-left-row);
        }

        .grid-right {
            grid-row: var(--sxs-mobile-right-row);
            grid-column: 1;
        }
    }

</style>