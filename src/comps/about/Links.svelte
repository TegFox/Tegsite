<script>
    import globalVars from "../../globalVars.js";
    import Card from "../../lib/Card.svelte";
    import SideBySide from "../../lib/SideBySide.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
    import alden from '../../assets/about_bg3.png'

    import {siTwitter, siDiscord, siTrello, siGithub} from 'simple-icons/icons'
    import Envelope from "svelte-bootstrap-icons/lib/Envelope";
    import Globe from "svelte-bootstrap-icons/lib/Globe"
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";

    const background = '#000000aa'

    let mobile
    let outerWidth
    const mobileBreakpoint = 700
    $: mobile = outerWidth <= mobileBreakpoint
</script>

<svelte:window bind:outerWidth/>

<Card background={`url(${alden})`}>
    <div class="col-center">
        <SideBySide>
            <div slot="left" class="h2 tac">
                Socials & Links
            </div>
            <div slot="right">
                <StackPanel direction="column" gap='1rem' align={mobile ? 'center' : undefined}>

                    <div class="h3">
                        Contact
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem">
                            <HCardButton href={globalVars.external.placeholder} {background}>
                                <Envelope height='24' width='24'/>
                                E-mail
                            </HCardButton>
                            <HCardButton href={globalVars.external.placeholder} {background}>
                                <Icon icon={siDiscord}/>
                                Discord
                            </HCardButton>
                        </StackPanel>
                    </div>


                    <div class="h3">
                        Socials
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem">
                            <HCardButton href={globalVars.external.twitter} {background}>
                                <Icon icon={siTwitter}/>
                                Twitter
                            </HCardButton>
                            <HCardButton href={globalVars.external.placeholder} {background}>
                                <Icon icon={siTwitter}/>
                                Twitter (18+)
                            </HCardButton>
                        </StackPanel>
                    </div>


                    <div class="h3">
                        Useful
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem">
                            <HCardButton href={globalVars.external.trello} {background}>
                                <Icon icon={siTrello}/>
                                Trello
                            </HCardButton>
                        </StackPanel>
                    </div>


                    <div class="h3">
                        Other
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem">
                            <HCardButton href={globalVars.external.trello} {background}>
                                <Globe width="24" height="24"/>
                                ToyHouse
                            </HCardButton>
                            <HCardButton href={globalVars.external.placeholder} {background}>
                                <Icon icon={siGithub}/>
                                GitHub
                            </HCardButton>
                        </StackPanel>
                    </div>
                </StackPanel>
            </div>
        </SideBySide>
    </div>
</Card>
