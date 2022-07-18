<script>

    export let childWidth = '48%'
    export let maxChildWidth = 'auto'
    export let gap = '4%'
    export let mobileGap = gap;
    export let reverse = false
    export let align = 'center'

</script>

<div class="sxs-flex-outer"
     style={`--sxs-child-width: ${childWidth};
             --sxs-max-child-width: ${maxChildWidth};
             --sxs-align: ${align};
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
        width: calc(2*var(--sxs-child-width) + var(--sxs-gap));
        max-width: 100%;
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
            width: 100%;
            flex-direction: var(--sxs-mobile-dir);
            gap: var(--sxs-mobile-gap)
        }

        .sxs-flex-child {
            width: 100%;
            max-width: 90vw;
            text-align: center;
        }
    }

</style>
