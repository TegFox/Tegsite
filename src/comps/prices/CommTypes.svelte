<script>
import globalVars from "../../globalVars.js";
import HoverCard from "../../lib/HoverCard.svelte";
import StackPanel from "../../lib/StackPanel.svelte";
import ReactiveComp from "../../lib/ReactiveComp.svelte";
import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
import Card from "../../lib/Card.svelte";
import RArrow from '../../assets/other/rarrow.svg'
import commtypes from '../../commtypes.js'
import GradRevealDetails from "../common/GradRevealDetails.svelte";

export let routeBase

const background = '#14191d'
const overlayBackground = globalVars.colors.teg_grey

</script>


<ReactiveComp825>

    <div slot="main" class="commtypes-grid-outer">
        {#each Object.keys(commtypes) as key}
            <a class="commtypes-grid-item" href={`${routeBase}${commtypes[key].link}`}
               style="text-decoration: none; color: white">
                <div class="item-main" >
                    <GradRevealDetails img={commtypes[key].img} height="100%" maxHeightDelta="3rem">
                        <div slot="above" class="allcaps wide h3 half-ls">
                            {commtypes[key].name}
                        </div>
                        <div slot="hidden" class="text half-ls">
                            {commtypes[key].desc}
                        </div>
                        <div slot="below" class="text half-ls">
                            {#if commtypes[key].start}
                                Starting at <strong>US${commtypes[key].start}</strong>
                            {/if}
                        </div>
                    </GradRevealDetails>
                </div>
            </a>
        {/each}
    </div>

    <StackPanel slot="alt" direction="column" gap="2rem">
        {#each Object.keys(commtypes) as key}
            <a href={`${routeBase}${commtypes[key].link}`} style="text-decoration: none; color: white">
                <div class="item-alt" >
                    <Card padding="0" img={commtypes[key].img} height="100%">
                        <div class="grad">
                            <div class="container">
                                <div class="h3 allcaps wide half-ls">
                                    {commtypes[key].name}
                                </div>
                                <div class="text half-ls">
                                    {commtypes[key].desc}
                                </div>
                                {#if commtypes[key].start}
                                    <div class="text half-ls">
                                        Starting at <strong>US${commtypes[key].start}</strong>
                                    </div>
                                {/if}
                                <div class="cap">
                                    Click to learn more!
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </a>
        {/each}
    </StackPanel>

</ReactiveComp825>


<style>

    :root {
        --commtypes-item-width: 44vw;
        --commtypes-item-height: 27rem;
        --commtypes-item-gap: 2rem;
    }

    @media (max-width: 1440px) {
        :root {
            --commtypes-item-width: 42vw;
            --commtypes-item-height: 24rem;
            --commtypes-item-gap: 2rem;
        }
    }

    @media (max-width: 950px) {
        :root {
            --commtypes-item-width: 40vw;
            --commtypes-item-height: 21rem;
            --commtypes-item-gap: 2rem;
        }
    }

    .commtypes-grid-outer {
        margin: 2rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: var(--commtypes-item-height);
        grid-row-gap: var(--commtypes-item-gap);
    }

    .commtypes-grid-item {
        display: grid;
        place-items: center;
        height: var(--commtypes-item-height);
    }

    .item-main {
        width: var(--commtypes-item-width);
        height: var(--commtypes-item-height);
    }

    .item-alt {
        width: 100%;
        height: var(--commtypes-item-height);
    }

    .grad {
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent 30%, #000000ee);
        position: relative;
    }

    .container {
        padding: 2rem;
        position: absolute;
        bottom: 0;
    }


</style>
