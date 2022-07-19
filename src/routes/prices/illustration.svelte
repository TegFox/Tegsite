<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Illustration from "../../vars/comms/Illustration.js";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<svelte:head>
    <title>
        {Illustration.name} - Teg Fox
    </title>
</svelte:head>

<InfoPage info={Illustration}/>
