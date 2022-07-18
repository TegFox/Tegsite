<script>
    import globalVars from "../../vars/GlobalVars.js";
    import HoverCard from "../../lib/HoverCard.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
    import ReactiveComp from "../../lib/ReactiveComp.svelte";
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
    import Card from "../../lib/Card.svelte";
    import RArrow from '../../assets/other/rarrow.svg'

    export let routeBase

    const background = '#14191d'
    const overlayBackground = globalVars.colors.teg_grey

</script>

<StackPanel direction="column" gap="2rem">

    {#each globalVars.comm_types as type}

        <ReactiveComp825>
            <div slot="main" class="hover-target">
                <a href="{routeBase}{type.link}" style:text-decoration="none" style:color="white">
                    <HoverCard {background} {overlayBackground} padding="1.5rem">
                        <StackPanel direction="row" gap="2.5rem" align="center">
                            <div class="section-img" style:background-image={`url(${type.img})`}
                                 style:background-repeat="no-repeat"
                                 style:background-size={type.contain ? "contain" : "cover" }
                                 style:background-position="center" style:border-radius="12px"></div>
                            <div class="section-text">
                                <StackPanel direction="column">
                                    <div class="allcaps wide h3">
                                        {type.name}
                                    </div>
                                    <div class="text">
                                        <p>
                                            {#if type.desc}
                                                {type.desc}
                                            {/if}
                                        <p>
                                            {#if type.start}
                                                Starting at <strong>US${type.start}</strong>
                                            {/if}
                                        </p>
                                        <div class="cap">
                                            <StackPanel align="center">
                                                Click To Learn More
                                                <img src={RArrow} class="arrow" style:height="1.25rem"/>
                                            </StackPanel>
                                        </div>
                                    </div>
                                </StackPanel>
                            </div>
                        </StackPanel>
                    </HoverCard>
                </a>
            </div>
            <div slot="alt">
                <a href="{routeBase}{type.link}" style:text-decoration="none" style:color="white">
                    <Card background={overlayBackground} padding="1.5rem">
                        <StackPanel direction="column" gap="2rem" align="center">
                            <div style:width="100%" style:height="20rem" style:background-image={`url(${type.img})`}
                                 style:background-size="cover" style:background-position="center" style:border-radius="12px"></div>
                            <StackPanel direction="column">
                                <div class="allcaps wide h3 tac">
                                    {type.name}
                                </div>
                                <div class="text tac">
                                    <p>
                                        {#if type.desc}
                                            {type.desc}
                                        {/if}
                                    <p>
                                        {#if type.start}
                                            Starting at <strong>US${type.start}</strong>
                                        {/if}
                                    </p>
                                    <div class="cap">
                                        Click To Learn More!
                                    </div>
                                </div>
                            </StackPanel>
                        </StackPanel>
                    </Card>
                </a>
            </div>
        </ReactiveComp825>

    {/each}

</StackPanel>

<style>

    .section-img {
        width: 30rem;
        height: 20rem;
    }

    .section-text {
        width: 30rem;
    }

    @media (max-width: 1250px) {
        .section-text {
            width: 22rem;
        }
    }

    @media (max-width: 1050px) {
        .section-img {
            width: 23rem;
            height: 16rem;
        }

        .section-text {
            width: 15rem;
        }
    }

    .arrow {
        transition: 0.2s;
        transform: translate3d(-10px, 0, 0) ;
        opacity: 0;
    }

    .hover-target:hover .arrow {
        opacity: 100%;
        transform: translate3d(5px, 0, 0);
    }
</style>
