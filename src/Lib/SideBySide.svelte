<script>

    export let childWidth = '48%'
    export let maxChildWidth = 'auto'
    export let gap = '4%'
    export let mobileGap = gap;
    export let reverse = false

</script>

<div class="sxs-flex-outer" style={`--sxs-child-width: ${childWidth};
                                    --sxs-max-child-width: ${maxChildWidth};
                                    --sxs-gap: ${gap};
                                    --sxs-mobile-gap: ${mobileGap};
                                    --sxs-mobile-dir: ${reverse ? 'column-reverse' : 'column'}`}>

    <div class="sxs-flex-child">
        <slot name="left"/>
    </div>

    <div class="sxs-flex-spacer"></div>

    <div class="sxs-flex-child">
        <slot name="right"/>
    </div>

</div>

<style>

    .sxs-flex-outer {
        display: flex;
        align-items: center;
        gap: var(--sxs-gap);
    }

    .sxs-flex-child {
        width: var(--sxs-child-width);
        max-width: var(--sxs-max-child-width);
    }

    @media (max-width: 825px) {
        .sxs-flex-outer {
            flex-direction: var(--sxs-mobile-dir);
            gap: var(--sxs-mobile-gap)
        }

        .sxs-flex-child {
            max-width: 90vw;
            text-align: center;
        }
    }

</style>
