<script>
    import Card from "../../lib/Card.svelte";
    import globalVars from "../../vars/GlobalVars.js";
    import CharacterIcon from "../common/CharacterIcon.svelte";
    import Teg from '../../assets/chars/teg.png'
    import Kai from '../../assets/chars/kai.png'
    import Alex from '../../assets/chars/alex.png'
    import Piper from '../../assets/chars/piper.png'
    import EdgeHusky from '../../assets/chars/edgehusky.png'
    import Richard from '../../assets/chars/richard.png'
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'
    import 'swiper/css';
    import 'swiper/css/bundle'
    import '../../app.css'

    const my_chars = [
        {
            name: "Teg",
            img: Teg,
            sona: true
        },
        {
            name: "Kai",
            img: Kai,
            sona: true
        },
        {
            name: "Alex",
            img: Alex,
            sona: true
        },
        {
            name: "Piper",
            img: Piper,
            sona: true
        },
        {
            name: "Edge Husky",
            img: EdgeHusky,
            sona: false
        },
        {
            name: "Richard",
            img: Richard,
            sona: false
        },

    ]
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
                <div class="about-flex-wrap">
                    {#each my_chars as char}
                        <CharacterIcon bold={char.sona} img={char.img} name={char.name} />
                    {/each}
                </div>
            </div>

            <div slot="alt" >
                <div class="tac">
                    Swipe (or click and drag) to navigate!
                </div>
                <Swiper modules={[Pagination]}
                        slidesPerView="auto"
                        pagination={{
                            clickable: true
                        }}>
                    {#each my_chars as char}
                        <div class="swiper-slide swiper-slide-outer">
                            <div class="swiper-slide-inner">
                                <CharacterIcon bold={char.sona} img={char.img} name={char.name} />
                            </div>
                        </div>
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
