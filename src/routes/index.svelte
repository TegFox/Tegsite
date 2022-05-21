<script>
    import gvars from "../globalVars.js"

    import Title from "../comps/Title.svelte"
    import img from '../assets/forest.png'
    import Body from "../Lib/Body.svelte"
    import Comms from "../comps/Comms.svelte"
    import StackPanel from "../Lib/StackPanel.svelte"
    import HoverCard from "../Lib/HoverCard.svelte"
    import GreyscaleCard from "../Lib/GreyscaleCard.svelte"
    import Goto from "../comps/Goto.svelte"
    import Commission from "../assets/commission.png"
    import YCH from "../assets/ych.png"
    import Terms from "../assets/terms.png"
    import About from "../assets/about.png"
    import Footer from "../assets/footer.png"
    import HomeLinks from "../comps/HomeLinks.svelte"
    import Twitter from "../assets/icons/twitter.svg"
    import Trello from "../assets/icons/trello.png"
    import Patreon from "../assets/icons/patreon.png"

    const tegGrey = '#192231'

    const overlay = '#0000003b'
    const socialwidth = '20rem'
</script>

<title>Teg Fox</title>

<main>
    <Title title="Welcome!" {img} height="96vh">
        Hey! I'm Teg, and I draw fluffy animals!
    </Title>


    <Body>
        <Comms status={gvars.comms}/>
    </Body>

    <Body>
        <div class="mobilewrap-flexbox">
            <div class="mobilewrap-flexitem">
                <StackPanel direction="column" gap="2rem" align="stretch">
                    <Goto background={`url(${Commission})`} {overlay} href="http://dance.goat.dance/" title="Commissions" sub="Learn More"/>
                    <Goto background={`url(${YCH})`} {overlay} href="http://dance.goat.dance/" title="YCH" sub="Your Character Here. Learn More"/>
                </StackPanel>
            </div>
            <div class="mobilewrap-flexitem">
                <StackPanel direction="column" gap="2rem" align="stretch">
                    <Goto background={`url(${Terms})`} {overlay} href="http://dance.goat.dance/" title="Terms & FAQ" sub="Learn More"/>
                    <Goto background={`url(${About})`} {overlay} href="http://dance.goat.dance/" title="About Me!" sub="Learn More"/>
                </StackPanel>
            </div>
        </div>
    </Body>

    <div style:margin-top="2rem" style:background={tegGrey}>
        <Body>

            <StackPanel style="justify-content: space-evenly">
                <HomeLinks img={Twitter} name="Twitter" href="{gvars.links.twitter}" width={socialwidth}>
                    Twitter is where I post art and updates most frequently. If you want to keep up with me and my
                    shenanigans, this is the place to go!
                </HomeLinks>
                <HomeLinks img={Trello} name="Trello" href={gvars.links.trello} width={socialwidth}>
                    Trello is how I keep track of my queue! If I have commissions or projects in progress, all
                    of it will be accounted for on this board!
                </HomeLinks>
                <HomeLinks img={Patreon} name="Patreon" width={socialwidth}>
                    Patreon is a service that allows subscribers to get access to exclusive content!
                    <p>
                        Coming soon...
                    </p>
                </HomeLinks>
            </StackPanel>

        </Body>
    </div>
</main>

<style>

    .mobilewrap-flexbox {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: stretch;
        align-content: stretch;
    }

    .mobilewrap-flexitem {
        width: 100%;
    }

    @media (max-width: 880px) {
        .mobilewrap-flexbox {
            flex-direction: column;
        }
    }

</style>
