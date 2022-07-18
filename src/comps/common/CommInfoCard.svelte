<script>
    import globalVars from "../../vars/GlobalVars.js";
    import HoverCard from "../../lib/HoverCard.svelte";
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'
    import 'swiper/css';
    import 'swiper/css/bundle'
    import '../../app.css'
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";

    export let info = {}
</script>

<HoverCard background="#ffffff18" overlayBackground={globalVars.colors.teg_grey} padding="3rem">
    <ReactiveComp825>
        <div slot="alt" class="tac title-mobile">
            <div class="h2 allcaps wide">{info.name}</div>
            <div class="text">{info.desc}</div>
        </div>
    </ReactiveComp825>
    <SideBySideUneven width="100%" leftWidth="50%" reverse="true" align="flex-start" mobileGap="1rem">
        <div slot="left" class="text">
            <ReactiveComp825>
                <div slot="main">
                    <div class="h2 allcaps wide">{info.name}</div>
                    <p>{info.desc}</p>
                </div>
            </ReactiveComp825>

            {#if info.base}
            <p>Starts at <strong>US${info.base}</strong>
            {/if}
            <p>
                <ul>
                    {#each info.prices ?? [] as price}
                        <li style:text-align="left">
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

            {#each info.extra ?? [] as extra}
                <p> {extra}
            {/each}

        </div>
        <div slot="right" class:swiper-slide-outer={info.imgs && info.imgs.length > 1}>
            <Swiper modules={[Pagination, Navigation]}
                    centeredSlides={true}
                    slidesPerView="auto"
                    navigation={true}
                    pagination={{
                            clickable: true
                        }}>
                {#each info.imgs ?? [] as src}
                    <div class="swiper-slide center-outer">
                        <div class="swiper-slide-inner center-inner" class:swiper-slide-inner-offset={info.imgs && info.imgs.length > 1}>
                            <img {src} class="img no-highlight"/>
                        </div>
                    </div>
                {/each}
            </Swiper>
            {#if info.imgs && info.imgs.length > 1}
                <div class="tac cap">
                    Swipe to navigate through gallery
                </div>
            {/if}
        </div>
    </SideBySideUneven>
</HoverCard>

<style>

    :root {
        --cic-img-height: 32rem;
    }

    .center-outer {
        display: table;
        height: 100%
    }

    .center-inner {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .img {
        border-radius: 8px;
        max-height: var(--cic-img-height);
        max-width: 99%;
    }

    .swiper-slide-inner-offset {
        margin: 0 0.25rem;
    }

    .swiper-slide-inner {
        height: var(--cic-img-height);
    }

    @media (max-width: 1280px) {
        :root {
            --cic-img-height: 26rem;
        }
    }

    @media (max-width: 960px) {
        :root {
            --cic-img-height: 22rem;
        }
    }



</style>
