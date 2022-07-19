<script>
import globalVars from "../../vars/GlobalVars.js";
import HoverCard from "../../lib/HoverCard.svelte";
import StackPanel from "../../lib/StackPanel.svelte";
import ReactiveComp from "../../lib/ReactiveComp.svelte";
import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
import Card from "../../lib/Card.svelte";
import RArrow from '../../assets/other/rarrow.svg'
import GradRevealDetails from "../common/GradRevealDetails.svelte";

export let routeBase

const background = '#14191d'
const overlayBackground = globalVars.colors.teg_grey

</script>


<ReactiveComp825>

    <div slot="main" class="commtypes-grid-outer">
        {#each globalVars.comm_types as type, i}
            <a class="commtypes-grid-item" href={`${routeBase}${type.link}`}
               class:commtypes-grid-item-full-width={i === (globalVars.comm_types.length - 1) && i % 2 === 0}
               style="text-decoration: none; color: white">
                <div class="item-main" >
                    <GradRevealDetails img={type.img} height="100%" maxHeightDelta="3rem" contain={type.contain}>
                        <div slot="above" class="allcaps wide h3 half-ls">
                            {type.name}
                        </div>
                        <div slot="hidden" class="text half-ls">
                            {type.desc}
                        </div>
                        <div slot="below" class="text half-ls">
                            {#if type.start}
                                Starting at <strong>US${type.start}</strong>
                            {/if}
                        </div>
                    </GradRevealDetails>
                </div>
            </a>
        {/each}
    </div>

    <StackPanel slot="alt" direction="column" gap="2rem">
        {#each globalVars.comm_types as type}
            <a href={`${routeBase}${type.link}`} style="text-decoration: none; color: white">
                <div class="item-alt" >
                    <Card padding="0" img={type.img} height="100%" contain={type.contain}>
                        <div class="grad">
                            <div class="container">
                                <div class="h3 allcaps wide half-ls">
                                    {type.name}
                                </div>
                                <div class="text half-ls">
                                    {type.desc}
                                </div>
                                <StackPanel gap="4px" align="center">
                                    {#if type.start}
                                        <div class="cap">
                                            Starting at <strong>US${type.start}</strong>
                                        </div>
                                        <div class="cap">
                                            |
                                        </div>
                                    {/if}
                                    <div class="cap">
                                        Expand
                                    </div>
                                    <img src={RArrow} style:height="1rem"/>
                                </StackPanel>
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
        --commtypes-item-gap: 2rem;
        /*--commtypes-item-width: calc((100vw - 2 * (3rem) - var(--commtypes-item-gap) * 2) / 2);*/
        --commtypes-item-height: 27rem;
    }

    @media (max-width: 1440px) {
        :root {
            --commtypes-item-height: 24rem;
        }
    }

    @media (max-width: 950px) {
        :root {
            --commtypes-item-height: 21rem;
        }
    }

    .commtypes-grid-outer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: var(--commtypes-item-height);
        grid-row-gap: var(--commtypes-item-gap);
        grid-column-gap: var(--commtypes-item-gap)
    }

    .commtypes-grid-item {
        display: grid;
        height: var(--commtypes-item-height);
    }

    .commtypes-grid-item-full-width {
        grid-column: 1 / 3;
    }

    .item-main {
        width: 100%;
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
        padding: 1.5rem;
        position: absolute;
        bottom: 0;
    }

</style>
