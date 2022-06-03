
<script>
    import GreyscaleCard from "../Lib/ImageColorCard.svelte";

    export let background = '#222222'
    export let title = ''
    export let sub
    export let href
    export let overlay
    export let padding = '3rem 0 3rem 2rem'
    export let height = 'auto'


</script>

<a {href} style:text-decoration="none" style:color="white">
    <GreyscaleCard {background} {overlay} {height} {padding} base="75%">
        <div class="goto-title goto-ds">
            {title}
        </div>
        {#if sub}
        <div style:font-weight="normal" class="goto-ds">
            {sub}
        </div>
        {/if}
    </GreyscaleCard>
</a>

<style>

    .goto-title {
        font-size: 3rem;
        white-space: nowrap;
    }

    @media only screen and (max-device-width: 600px) {
        .goto-title {
            font-size: 2.5rem;
        }
    }

    .goto-ds {
        filter: drop-shadow(2px 2px 5px #00000020);
    }

</style>
