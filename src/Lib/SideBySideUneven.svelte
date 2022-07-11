<script>

    export let leftWidth = '48%'
    export let maxChildWidth = 'auto'
    export let width = 'auto'
    export let gap = '4%'
    export let mobileGap = gap;
    export let reverse = false

</script>

<div class="sxs-flex-outer"
     style={`--sxs-left-width: ${leftWidth};
             --sxs-max-child-width: ${maxChildWidth};
             --sxs-width: ${width};
             --sxs-gap: ${gap};
             --sxs-mobile-gap: ${mobileGap};
             --sxs-mobile-dir: ${reverse ? 'column-reverse' : 'column'}`}>

    <div class="sxs-flex-left">
        <slot name="left"/>
    </div>

    <div class="sxs-flex-spacer"></div>

    <div class="sxs-flex-right">
        <slot name="right"/>
    </div>

</div>

<style>

    .sxs-flex-outer {
        width: var(--sxs-width);
        max-width: 100%;
        display: flex;
        align-items: center;
        gap: var(--sxs-gap);
    }

    .sxs-flex-left {
        width: var(--sxs-left-width);
        max-width: var(--sxs-max-child-width);
    }

    .sxs-flex-right {
        width: calc(100% - var(--sxs-left-width) - var(--sxs-gap));
        max-width: var(--sxs-max-child-width);
    }

    @media (max-width: 825px) {
        .sxs-flex-outer {
            width: 100%;
            flex-direction: var(--sxs-mobile-dir);
            gap: var(--sxs-mobile-gap)
        }

        .sxs-flex-left {
            width: 100%;
            max-width: 90vw;
            text-align: center;
        }

        .sxs-flex-right {
            width: 100%;
            max-width: 90vw;
            text-align: center;
        }
    }

</style>
