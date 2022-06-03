<script>

    import img from '../assets/about.png'
    import Me from '../assets/me.png'
    import Title from "../comps/Title.svelte";
    import Body from "../Lib/Body.svelte";
    import Card from "../Lib/Card.svelte";
    import globalVars from "../globalVars.js";
    import CharacterIcon from "../comps/CharacterIcon.svelte";

    import Teg from '../assets/logo.png'

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
            <div class="about-split-flex">
                <div class="about-split-child about-center-children-col">
                    <img src={Me} class="about-teg"/>
                </div>
                <div class="about-split-child">
                    <Card>
                        <div class="about-h1">
                            Heya! I'm Teg!
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
            </div>
        </div>
    </Body>

    <Body>
        <Card background={`linear-gradient(-30deg, ${globalVars.colors.teg_dark}, ${globalVars.colors.teg_light})`}>
            <div style:color="white" style:text-align="center">
                <div class="about-h1">
                    My OCs!
                </div>
                These are all of the Characters that I've created! More on the way 🦊
            </div>
            <div class="about-center-children-col">
                <div class="about-flex-wrap">
                    <CharacterIcon img={Teg} name="Teg" />
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

    .about-teg {
        width: 320px;
    }

    .about-p {
        font-size: 1.15rem;
    }

    .about-split-flex {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    .about-split-child {
        width: 600px;
        max-width: 40vw;
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

    @media (max-width: 975px) {

        .about-h1 {
            text-align: center;
        }

        .about-p {
            font-size: 1rem;
        }

        .about-split-flex {
            flex-direction: column;
            gap: 0;
        }

        .about-split-child {
            max-width: 40rem;
            width: 100%;
        }
    }

</style>
