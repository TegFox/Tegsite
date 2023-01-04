
<script>
    import ImageHoverCard from "$lib/Cards/ImageHoverCard.svelte";

    export let background = '#222222'
    export let title = ''
    export let sub
    export let href
    export let overlay
    export let padding = '3rem 0 3rem 2rem'
    export let height = 'auto'


</script>

<a {href} style:text-decoration="none" style:color="white">
    <ImageHoverCard {background} {overlay} {height} {padding} base="75%">
        <div class="h2 goto-ds">
            {title}
        </div>
        {#if sub}
        <div class="text goto-ds">
            {sub}
        </div>
        {/if}
    </ImageHoverCard>
</a>

<style>

    .goto-ds {
        filter: drop-shadow(2px 2px 5px #00000020);
    }

</style>
