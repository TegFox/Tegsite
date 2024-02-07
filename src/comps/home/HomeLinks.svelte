<script>
    import gvars from "../../vars/GlobalVars.js"
    import StackPanel from "../../lib/StackPanel.svelte";
    import DescLink from "../common/DescLink.svelte";
    import Twitter from "../../assets/icons/twitter.svg"
    import Trello from "../../assets/icons/trello.png"
    import Patreon from "../../assets/icons/patreon.png"
    import Bluesky from "../../assets/icons/bluesky.svg"
    import Mastodon from "../../assets/icons/mastodon.svg"
    import Furaffinity from "../../assets/icons/furaffinity.png"

    export let socialwidth
</script>

<div class="grid-wrapper">
    <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax({socialwidth}, 1fr))">
        <DescLink img={Trello} name="Trello" href={gvars.external.trello} width={socialwidth}>
            Trello is how I keep track of my queue! If I have commissions or projects in progress, all
            of it will be accounted for on this board!
        </DescLink>
        <DescLink img={Twitter} name="Twitter" href="{gvars.external.twitter}" width={socialwidth}>
            Twitter is where I post art and updates most frequently. You can also catch me and more of my
            personal life on <a class="link" href={gvars.external.twitter_personal}> my personal account!</a>
        </DescLink>
        <DescLink img={Bluesky} name="Bluesky" href="{gvars.external.bluesky}" width={socialwidth}>
            Bluesky is another social media platform I use (albeit less frequently than twitter). Follow me 
            here if this is your platform of choice!
        </DescLink>
        <DescLink img={Mastodon} name="Mastodon" href="{gvars.external.mastodon}" width={socialwidth}>
            Mastodon is a federated social media platform using ActivityPub (although I'm less active here) 
            Find me on pawb.fun!
        </DescLink>
        <DescLink img={Furaffinity} name="FurAffinity" href="{gvars.external.furaffinity}" width={socialwidth}>
            Furaffinity is a website for furries to share artwork and other creative work! I'm less active here, but 
            feel free to watch or shoot me a note!
        </DescLink>
        <DescLink img={Patreon} name="Patreon" href={gvars.external.patreon} width={socialwidth}>
            Patreon is a service that allows subscribers to get access to exclusive content! :3
        </DescLink>
    </div>
</div>

<style>

    .grid-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }    

    .grid {
        display: grid;
        grid-gap: 3rem;
        align-self: stretch;
    }
</style>
