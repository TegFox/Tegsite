<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Stickers from "../../vars/comms/Stickers.js"
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<svelte:head>
    <title>
        {Stickers.name} - Teg Fox
    </title>
</svelte:head>

<InfoPage info={Stickers}/>
