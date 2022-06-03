<script>
    import gvars from "../globalVars.js"

    import Title from "../comps/Title.svelte"
    import img from '../assets/forest.png'
    import Body from "../Lib/Body.svelte"
    import Comms from "../comps/Comms.svelte"
    import StackPanel from "../Lib/StackPanel.svelte"
    import HoverCard from "../Lib/HoverCard.svelte"
    import GreyscaleCard from "../Lib/ImageColorCard.svelte"
    import Goto from "../comps/Goto.svelte"
    import Commission from "../assets/commission.png"
    import YCH from "../assets/ych.png"
    import Terms from "../assets/terms.png"
    import About from "../assets/about.png"
    import HomeLinks from "../comps/HomeLinks.svelte"
    import Twitter from "../assets/icons/twitter.svg"
    import Trello from "../assets/icons/trello.png"
    import Patreon from "../assets/icons/patreon.png"

    const overlay = '#0000003b'
    const socialwidth = '20rem'
</script>

<title>Teg Fox</title>

<main>

    <Title title="Welcome!" {img}>
        Hey! I'm Teg, and I draw fluffy animals!
    </Title>


    <Body>
        <Comms status={gvars.comms}/>
    </Body>

    <Body>
        <div class="mobilewrap-flexbox">
            <div class="mobilewrap-flexitem">
                <StackPanel direction="column" gap="2rem" align="stretch">
                    <Goto background={`url(${Commission})`} {overlay} href={gvars.links.commission.path} title="Prices" sub="Learn More"/>
                    <Goto background={`url(${YCH})`} {overlay} href={gvars.links.ych.path} title="YCH" sub="Your Character Here. Learn More"/>
                </StackPanel>
            </div>
            <div class="mobilewrap-flexitem">
                <StackPanel direction="column" gap="2rem" align="stretch">
                    <Goto background={`url(${Terms})`} {overlay} href={gvars.links.termsfaq.path} title="Terms & FAQ" sub="Learn More"/>
                    <Goto background={`url(${About})`} {overlay} href={gvars.links.about.path} title="About Me!" sub="Learn More"/>
                </StackPanel>
            </div>
        </div>
    </Body>

    <Body color={gvars.colors.teg_grey}>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <StackPanel style="justify-content: space-evenly">
                <HomeLinks img={Twitter} name="Twitter" href="{gvars.external.twitter}" width={socialwidth}>
                    Twitter is where I post art and updates most frequently. If you want to keep up with me and my
                    shenanigans, this is the place to go!
                </HomeLinks>
                <HomeLinks img={Trello} name="Trello" href={gvars.external.trello} width={socialwidth}>
                    Trello is how I keep track of my queue! If I have commissions or projects in progress, all
                    of it will be accounted for on this board!
                </HomeLinks>
                <HomeLinks img={Patreon} name="Patreon" href={gvars.external.patreon} width={socialwidth}>
                    Patreon is a service that allows subscribers to get access to exclusive content!
                </HomeLinks>
            </StackPanel>
        </div>

    </Body>

</main>

<style>

    .mobilewrap-flexbox {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: stretch;
        align-content: stretch;
        padding-bottom: 3rem;
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
