<script>
    import HCardButton from "../common/HCardButton.svelte";
    import Icon from "../../lib/Icon.svelte";
    import {siMicrosoftoutlook, siPatreon, siTrello, siTwitter} from "simple-icons/icons";
    import globalVars from "../../globalVars.js";

    const background = '#000000aa'
</script>

<div>
    <div class="text">
        <div class="h4">
            Important Links!
        </div>
        <p style:margin-top="0">
            Here are some links that you might be looking for 🦊
        </p>
    </div>
    <div>
        <div class="flex-wrap mobile-space-evenly-825 bold wide allcaps">
            <HCardButton href={globalVars.external.twitter} {background}>
                <Icon icon={siTwitter}/>
                Twitter
            </HCardButton>
            <HCardButton href={globalVars.external.trello} {background}>
                <Icon icon={siTrello}/>
                Trello
            </HCardButton>
            <HCardButton href={globalVars.external.patreon} {background}>
                <Icon icon={siPatreon}/>
                Patreon
            </HCardButton>
            <HCardButton href={globalVars.external.placeholder} {background}>
                <Icon icon={siMicrosoftoutlook}/>
                E-Mail
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
