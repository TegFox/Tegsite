<script>

    import img from '../assets/about.png'
    import Me from '../assets/me.png'
    import Teg from '../assets/chars/teg.png'
    import Kai from '../assets/chars/kai.png'
    import Alex from '../assets/chars/alex.png'
    import Piper from '../assets/chars/piper.png'
    import EdgeHusky from '../assets/chars/edgehusky.png'
    import Richard from '../assets/chars/richard.png'

    import Title from "../comps/Title.svelte";
    import Body from "../Lib/Body.svelte";
    import Card from "../Lib/Card.svelte";
    import globalVars from "../globalVars.js";
    import CharacterIcon from "../comps/CharacterIcon.svelte";
    import SideBySide from "../Lib/SideBySide.svelte";

</script>

<title>
    About Me - Teg Fox
</title>

<div>

    <Title {img} title="About Me!">
        Hobbyist artist and photographer, Full time bloo fock
    </Title>


    <Body>
        <div class="about-center-children-col">
            <SideBySide childWidth="600px" maxChildWidth="40vw" gap="1rem" mobileGap="0">
                <div slot="left" class="about-center-children-col">
                    <img src={Me} style:width="320px"/>
                </div>

                <div slot="right">
                    <Card padding="2rem">
                        <div class="about-h1">
                            Hi! I'm Teg!
                        </div>
                        <div class="about-p">
                            <p>
                                I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in
                                art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,
                                and my work has only been improving since!
                            </p>
                            <p>
                                Beyond art and other furry stuff, I'm currently studying Computer Science at
                                Georgia Tech. I also enjoy taking photos, looking at branding standards,
                                simple graphic design, tinkering with electronics, and programming!
                            </p>
                        </div>
                    </Card>
                </div>
            </SideBySide>
        </div>
    </Body>

    <Body>
        <Card background={`linear-gradient(-30deg, ${globalVars.colors.teg_dark}, ${globalVars.colors.teg_light})`}>
            <div style:color="white" style:text-align="center">
                <div class="about-h1">
                    My OCs!
                </div>
                These are all of my characters! More on the way 🦊
            </div>
            <div class="about-center-children-col">
                <div class="about-flex-wrap">
                    <CharacterIcon img={Teg} name="Teg" />
                    <CharacterIcon img={Kai} name="Kai" />
                    <CharacterIcon img={Alex} name="Alex" />
                    <CharacterIcon img={Piper} name="Piper" />
                    <CharacterIcon img={EdgeHusky} name="Edge Husky" />
                    <CharacterIcon img={Richard} name="Richard" />
                </div>
            </div>
        </Card>
    </Body>

</div>

<style>

    .about-center-children-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-p {
        font-size: 1.15rem;
    }


    .about-h1 {
        font-size: 3rem;
        font-weight: bold;
    }

    .about-flex-wrap {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 2rem;
        gap: 1rem;
    }

    @media (max-width: 825px) {

        .about-h1 {
            text-align: center;
        }

        .about-p {
            font-size: 1rem;
        }

    }

</style>
