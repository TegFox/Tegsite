<script>
    import StackPanel from "../Lib/StackPanel.svelte";

    export let status = 'closed'
    export let color

    const closed = status.toLowerCase() === 'closed'
    const askme = status.toLowerCase() === 'ask me'
    const open = status.toLowerCase() === 'open'

    if (closed) color = '#EB3D45'
    else if (askme) color = '#EBCE3F'
    else if (open) color = '#21D66B'


</script>

<StackPanel direction="column" align="center" gap="20px">
    <div class="h2">
        Commissions are currently:
    </div>
    <div class="h1" style="color: {color}">
        {status.toUpperCase()}
    </div>

    {#if closed}
    <div class="bottom-text">
        Commissions usually open up every month if I'm not too busy.
        Feel free to shoot me a message to ask when my next expected opening is!
    </div>
    {/if}
</StackPanel>


<style>

    .h1 {
        text-align: center;
        font-weight: bold;
        font-size: 4rem;
    }

    .h2 {
        text-align: center;
        font-weight: bold;
        font-size: 2.5rem;
    }

    .bottom-text {
        text-align: center;
        font-size: large;
        font-weight: lighter;
        width: 40rem;
        max-width: 80vw;
    }

</style>