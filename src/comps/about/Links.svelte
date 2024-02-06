<script>
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";
    import Bluesky from "../../assets/icons/bluesky.svg"
    import {siMicrosoftoutlook, siPatreon, siTrello, siTwitter, siReddit, siMastodon} from "simple-icons/icons";
    import globalVars from "../../vars/GlobalVars.js";

    const background = '#000000aa'
</script>

<div>
    <div class="text">
        <div class="h4">
            Important Links!
        </div>
        <p style:margin-top="0">
            Here are some links that you might find useful 🦊
        </p>
    </div>
    <div>
        <div class="flex-wrap mobile-space-evenly-825 bold wide allcaps">
            <HCardButton href={globalVars.external.trello} {background}>
                <Icon icon={siTrello}/>
                Trello
            </HCardButton>
            <HCardButton href={globalVars.external.email} {background}>
                <Icon icon={siMicrosoftoutlook}/>
                E-Mail
            </HCardButton>
            <HCardButton href={globalVars.external.twitter} {background}>
                <Icon icon={siTwitter}/>
                Twitter
            </HCardButton>
            <HCardButton href={globalVars.external.bluesky} {background}>
                <img src={Bluesky} style:width="24px" style:filter="brightness(200)" alt="Logo for Bluesky social"/>
                BlueSky
            </HCardButton>
            <HCardButton href={globalVars.external.mastodon} {background}>
                <Icon icon={siMastodon}/>
                Mastodon
            </HCardButton>
            <HCardButton href={globalVars.external.reddit} {background}>
                <Icon icon={siReddit}/>
                Reddit
            </HCardButton>
            <HCardButton href={globalVars.external.patreon} {background}>
                <Icon icon={siPatreon}/>
                Patreon
            </HCardButton>
        </div>
    </div>
</div>

<style>

    .flex-wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

</style>
