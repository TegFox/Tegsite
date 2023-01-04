<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Card from "$lib/Cards/Card.svelte";
    import SideBySide from "../../lib/SideBySide.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
    import alden from '../../assets/about_bg3.png'

    import {siTwitter, siDiscord, siTrello, siGithub, siPatreon} from 'simple-icons/icons'
    import Envelope from "svelte-bootstrap-icons/lib/Envelope";
    import Globe from "svelte-bootstrap-icons/lib/Globe"
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";
    import Body from "../../lib/Body.svelte";
    import FixedBody from "../../lib/FixedBody.svelte";

    const background = '#000000aa'
</script>

<Card img={alden}>
    <div class="col-center">
        <SideBySide>
            <div slot="left" class="h2 tac">
                Socials & Links
            </div>
            <div slot="right">
                <StackPanel direction="column" gap='1rem' styleClass="mobile-center-825">

                    <div class="h3">
                        Contact
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem" styleClass="mobile-space-evenly-825">
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
                        Social
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem" styleClass="mobile-space-evenly-825">
                            <HCardButton href={globalVars.external.twitter} {background}>
                                <Icon icon={siTwitter}/>
                                Twitter
                            </HCardButton>
                            <HCardButton href={globalVars.external.placeholder} {background}>
                                <Icon icon={siTwitter}/>
                                Twitter (18+)
                            </HCardButton>
                            <HCardButton href={globalVars.external.patreon} {background}>
                                <Icon icon={siPatreon}/>
                                Patreon
                            </HCardButton>
                        </StackPanel>
                    </div>


                    <div class="h3">
                        Useful
                    </div>
                    <div class="text bold allcaps wide">
                        <StackPanel direction="row" gap="0.5rem" styleClass="mobile-space-evenly-825">
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
                        <StackPanel direction="row" gap="0.5rem" styleClass="mobile-space-evenly-825">
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
