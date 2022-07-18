<script>
    import gvars from "../../vars/GlobalVars.js"
    import StackPanel from "../../lib/StackPanel.svelte";
    import DescLink from "../common/DescLink.svelte";
    import Twitter from "../../assets/icons/twitter.svg"
    import Trello from "../../assets/icons/trello.png"
    import Patreon from "../../assets/icons/patreon.png"

    export let socialwidth
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
    <StackPanel style="justify-content: space-evenly">
        <DescLink img={Twitter} name="Twitter" href="{gvars.external.twitter}" width={socialwidth}>
            Twitter is where I post art and updates most frequently. If you want to keep up with me and my
            shenanigans, this is the place to go!
        </DescLink>
        <DescLink img={Trello} name="Trello" href={gvars.external.trello} width={socialwidth}>
            Trello is how I keep track of my queue! If I have commissions or projects in progress, all
            of it will be accounted for on this board!
        </DescLink>
        <DescLink img={Patreon} name="Patreon" href={gvars.external.patreon} width={socialwidth}>
            Patreon is a service that allows subscribers to get access to exclusive content!
        </DescLink>
    </StackPanel>
</div>
