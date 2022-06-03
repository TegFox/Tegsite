<script>
    import StackPanel from "../Lib/StackPanel.svelte";
    import Card from "../Lib/Card.svelte";
    import HoverCard from "../Lib/HoverCard.svelte";

    export let status = 'closed'
    export let color
    export let bgcolor
    let bgcolorBase

    if (status.toLowerCase() === 'askme') status = 'ask me'

    const closed = status.toLowerCase() === 'closed'
    const askme = status.toLowerCase() === 'ask me'
    const open = status.toLowerCase() === 'open'

    status = status.trim().toUpperCase()

    if (closed) {
        color = '#EB3D45'
        let grad1 = '#701625'
        let grad2 = '#23151a'
        bgcolor = `linear-gradient(-45deg, ${grad2}, ${grad1})`
        bgcolorBase = `linear-gradient(-45deg, ${grad2}, ${blendColors(grad1, grad2, 0.4)})`
    } else if (askme) {
        color = '#FFB103'
        let grad1 = '#805003'
        let grad2 = '#352015'
        bgcolor = `linear-gradient(-45deg, ${grad2}, ${grad1})`
        bgcolorBase = `linear-gradient(-45deg, ${grad2}, ${blendColors(grad1, grad2, 0.4)})`
    } else if (open) {
        color = '#21D66B'
        let grad1 = '#008050'
        let grad2 = '#11281e'
        bgcolor = `linear-gradient(-45deg, ${grad2}, ${grad1})`
        bgcolorBase = `linear-gradient(-45deg, ${grad2}, ${blendColors(grad1, grad2, 0.4)})`
    }

    function blendColors(colorA, colorB, amount) {
        const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
        const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
        const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
        const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
        const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
        return '#' + r + g + b;
    }

</script>

<div>
    <HoverCard background={bgcolorBase} overlayBackground={bgcolor}>
        <StackPanel direction="column" align="center" gap="20px">
            <div class="h h2">
                Commission Status:
            </div>
            <div class="h about-div-h1" style:color style:letter-spacing="6px">
                {status}
            </div>

            <div class="bottom-text">
                {#if closed}
                    Commissions usually open up every month if I'm not too busy.
                    Feel free to shoot me a message to ask when my next expected opening is!

                {:else if askme}
                    I'm currently doing commissions on a rolling basis.
                    Feel free to message about questions or to commission me!

                {:else if open}
                    I'm open for commissions!
                    Fill out the form to apply!

                    <p></p>
                    <a class="open-button" href="http://dance.goat.dance/">
                        <div class="open-button">
                            <Card background="#ffffff22" padding="0.5rem">
                                <div style:font-weight="bold" style:font-size="1.5rem" style:letter-spacing="4px">
                                    COMMISSION FORM
                                </div>
                            </Card>
                        </div>
                    </a>

                {/if}
            </div>
        </StackPanel>
    </HoverCard>
</div>


<style>

    .h {
        color: white;
        text-align: center;
    }

    .about-div-h1 {
        font-weight: bold;
        font-size: 4rem;
    }

    .h2 {
        font-weight: bold;
        font-size: 2.5rem;
    }

    .bottom-text {
        text-align: center;
        font-size: large;
        font-weight: lighter;
        max-width: 30rem;
        margin-bottom: 1rem;
    }

    .open-button {
        text-decoration: none;
        color: white;

        transition: all 0.2s;
    }

    .open-button:hover {
        transform: scale(1.05);
        filter: drop-shadow(2px 2px 4px #002B1B55);
    }

</style>
