<script>
    import Card from "../../lib/Card.svelte";
    import globalVars from "../../vars/GlobalVars.js";
    import my_chars from '../../vars/Chars.js'
    import CharacterIcon from "../common/CharacterIcon.svelte";
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import SwiperCore, {Mousewheel, Navigation, Pagination, Scrollbar} from 'swiper'
    import 'swiper/css';
    import 'swiper/css/bundle'
    import '../../app.css'

</script>

<div style:margin-bottom="2rem">
    <Card background={`linear-gradient(-30deg, ${globalVars.colors.teg_dark}, ${globalVars.colors.teg_light})`}>
        <div style:text-align="center" class="text">
            <div class="h2">
                My OCs!
            </div>
            <p style:margin="0.5rem" class="text">
                These are all of my characters! More on the way 🦊
            </p>
        </div>

        <ReactiveComp825>

            <div slot="main" class="col-center">
                <div class="text tac" style:margin-bottom="1rem">
                    Click cards for more info!
                </div>
                <div class="about-flex-wrap">
                    {#each Object.keys(my_chars) as char}
                        <CharacterIcon bold={my_chars[char].sona} img={my_chars[char].pfp} name={my_chars[char].name}
                                       href={`/chars/${char}`}/>
                    {/each}
                </div>
            </div>

            <div slot="alt" style="--swiper-theme-color: #fff;">
                <div class="text tac">
                    Swipe or Scroll to navigate, click for more info!
                </div>
                <Swiper modules={[Pagination, Mousewheel]}
                        slidesPerView="auto"
                        mousewheel={{
                            forceToAxis: true
                        }}
                        pagination={{
                            clickable: true
                        }}>
                    {#each Object.keys(my_chars) as char}
                        <a class="swiper-slide swiper-slide-outer white-link" href={`/chars/${char}`}>
                            <div class="swiper-slide-inner">
                                <CharacterIcon bold={my_chars[char].sona} img={my_chars[char].pfp}
                                               name={my_chars[char].name} />
                            </div>
                        </a>
                    {/each}
                </Swiper>
            </div>

        </ReactiveComp825>

    </Card>
</div>

<style>

    .about-flex-wrap {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem;
    }

    .swiper-slide-outer {
        width: 50%
    }

    .swiper-slide-inner {
        margin: 2rem 0.5rem;
    }

    @media (max-width: 420px) {
        .swiper-slide-outer {
            width: 100%;
        }
    }

</style>
