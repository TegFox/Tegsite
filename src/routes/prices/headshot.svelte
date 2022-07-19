<script>
    import GlobalVars from "../../vars/GlobalVars.js";
    import Headshot from "../../vars/comms/Headshot.js";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<svelte:head>
    <title>
        {Headshot.name} - Teg Fox
    </title>
</svelte:head>

<InfoPage info={Headshot}/>

