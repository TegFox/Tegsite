<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Fullbody from "../../vars/comms/Fullbody.js";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<svelte:head>
    <title>
        {Fullbody.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <InfoPage info={Fullbody}/>

    <Body>
        <NotDone/>
    </Body>

</div>
