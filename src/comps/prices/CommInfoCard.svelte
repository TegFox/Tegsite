<script>
    import globalVars from "../../vars/GlobalVars.js";
    import HoverCard from "../../lib/HoverCard.svelte";
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import SwiperCore, {Navigation, Pagination, Mousewheel} from 'swiper'
    import 'swiper/css';
    import 'swiper/css/bundle'
    import '../../app.css'
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
    import SideBySide from "../../lib/SideBySide.svelte";

    export let info = {}
    export let background = `linear-gradient(-45deg, #111111aa ,#bbbbff2b)`
    export let overlayBackground = `linear-gradient(-45deg, ${globalVars.colors.teg_grey}, #1C3562FF)`
    export let includeTitleDesc = true
</script>

<HoverCard {background} {overlayBackground} padding="0">
    <div class="padding">
        {#if includeTitleDesc}
            <ReactiveComp825>
                <div slot="alt" class="tac title-mobile">
                    <div class="h2 allcaps wide">{info.name}</div>
                    <div class="text">{info.desc}</div>
                </div>
            </ReactiveComp825>
        {/if}
        <SideBySide width="100%" reverse="true" align="center" maxChildWidth="50vw">
            <div slot="left" class="text">

                {#if includeTitleDesc}
                    <ReactiveComp825>
                        <div slot="main">
                            <div class="h3 allcaps wide">{info.name}</div>
                            <p>{info.desc}</p>
                        </div>
                    </ReactiveComp825>
                {/if}

                {#if info.base}
                    <p class:h4={!includeTitleDesc}>Starts at <strong>US${info.base}</strong>
                {/if}

                {#if info.prices}
                    <p>
                        <ul>
                            {#each info.prices as price}
                                <li style:text-align="left" class="half-ls">
                                    {#if price.amnt && price.desc}
                                        <strong>${price.amnt}</strong> — {price.desc}
                                    {:else if price.amnt}
                                        <strong>${price.amnt}</strong>
                                    {:else if price.desc}
                                        {price.desc}
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                {/if}

                {#if info.extra}
                    {#each info.extra as extra}
                        <p class:half-ls={includeTitleDesc}> {extra}
                    {/each}
                {/if}

            </div>
            <div slot="right">
                <div class="swiper-out" style="--swiper-theme-color: #fff;">
                    <Swiper modules={[Pagination, Navigation, Mousewheel]}
                            mousewheel={{
                                forceToAxis: true,
                            }}
                            spaceBetween={30}
                            slidesPerView="auto"
                            navigation={true}
                            pagination={{
                            clickable: true
                            }}>
                        {#each info.imgs ?? [] as src}
                            <div class="swiper-slide">
                                <div class="swiper-in">
                                    <img {src} class="img"/>
                                </div>
                            </div>
                        {/each}
                    </Swiper>
                    {#if info.imgs && info.imgs.length > 1}
                        <div class="tac cap" style:margin-top="0.5rem">
                            Swipe / Scroll to look through gallery
                        </div>
                    {/if}
                </div>
            </div>
        </SideBySide>
    </div>
</HoverCard>

<style>

    .title-mobile {
        margin-bottom: 2rem;
    }

    .swiper-out {
        max-width: 100%;
    }

    .swiper-in {
        max-width: 100%;
        border-radius: 8px;
        max-height: 28rem;
    }

    .swiper-slide {
        text-align: center;
    }

    .img {
        border-radius: 8px;
        max-height: 28rem;
        max-width: 100%;
        user-select: none;
    }

    .padding {
        padding: 2rem 3rem;
    }

    @media (max-width: 825px) {
        .padding {
            padding: 2rem 1rem;
        }
    }

</style>
