<script>
    import globalVars from "../../vars/GlobalVars.js";
    import RefSheet from "../../vars/comms/RefSheet.js";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<svelte:head>
    <title>
        {RefSheet.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <InfoPage info={RefSheet}/>

    <Body>
        <NotDone/>
    </Body>

</div>
