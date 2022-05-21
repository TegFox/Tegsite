
<script>
    import GreyscaleCard from "../Lib/GreyscaleCard.svelte";

    export let background = '#222222'
    export let title = ''
    export let sub
    export let href
    export let overlay
    export let height = 'auto'


</script>

<a {href} style:text-decoration="none" style:color="white">
    <GreyscaleCard {background} {overlay} {height} base="75%">
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
    }

    .goto-ds {
        filter: drop-shadow(2px 2px 5px #00000020);
    }

</style>