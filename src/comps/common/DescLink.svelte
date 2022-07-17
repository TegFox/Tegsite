<script>

    import StackPanel from "../../lib/StackPanel.svelte";

    export let img
    export let icon
    export let name
    export let logoSize = '4rem'
    export let width
    export let href

</script>

<div style:width style:margin-left="0" style:margin-right="auto" style:padding="2rem">
    <StackPanel direction="column" gap="1rem" align="flex-start">

        <StackPanel direction="row" align="center" gap="1rem">

            {#if img}
                <img src={img} style:height={logoSize}/>
            {:else if icon}
                <div style:height={logoSize}>
                    {icon}
                </div>
            {/if}

            <div class="h3">
                {name}
            </div>

        </StackPanel>



        <div class="text">
            <slot/>
        </div>

        {#if href}
            <a {href} class="text link">
                Go to {name}
            </a>
        {/if}

    </StackPanel>
</div>

<style>

</style>
