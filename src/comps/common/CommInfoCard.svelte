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
            <div class=" h3 allcaps wide">{info.name}</div>
            <div class="text">{info.desc}</div>
        </div>
    </ReactiveComp825>
    <SideBySideUneven width="100%" leftWidth="50%" reverse="true" align="flex-start" mobileGap="1rem">
        <div slot="left" class="text">
            <ReactiveComp825>
                <div slot="main">
                    <div class="h3 allcaps wide">{info.name}</div>
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
                    slidesPerView="auto"
                    navigation={true}
                    pagination={{
                            clickable: true
                        }}>
                {#each info.imgs ?? [] as src}
                    <div class="swiper-slide">
                        <div class="swiper-slide-inner" class:swiper-slide-inner-offset={info.imgs && info.imgs.length > 1}>
                            <img {src} class="img no-highlight"/>
                        </div>
                    </div>
                {/each}
            </Swiper>
            {#if info.imgs && info.imgs.length > 1}
                <div class="tac cap" style:margin-top="-0.5rem">
                    Swipe to navigate through gallery
                </div>
            {/if}
        </div>
    </SideBySideUneven>
</HoverCard>

<style>

    .title-mobile {
        margin-bottom: 2rem;
    }

    .swiper-slide-outer {
        margin-top: -2rem;
    }

    .swiper-slide-inner-offset {
        margin: 2rem 0;
    }

    .swiper-slide-inner {
        height: 32rem;
        text-align: center;
        display: grid;
        place-content: center;
    }

    .img {
        border-radius: 8px;
        max-height: 32rem;
        max-width: 99%;
    }

    @media (max-width: 825px) {
        .swiper-slide-inner {
            height: 20rem;
        }
        .img {
            max-height: 20rem;
            max-width: 99%;
        }
    }

</style>
