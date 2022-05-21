<script>

    import StackPanel from "../Lib/StackPanel.svelte";

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

            <div class="h">
                {name}
            </div>

        </StackPanel>



        <div>
            <slot/>
        </div>

        {#if href}
            <a {href} style:text-decoration="none" style:color="cyan">
                Go to {name}
            </a>
        {/if}

    </StackPanel>
</div>

<style>

    .h {
        font-weight: bold;
        font-size: 2rem;
    }

</style>