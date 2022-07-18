<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Halfbody from "../../vars/comms/Halfbody.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import InfoPage from "../../comps/prices/InfoPage.svelte";
</script>

<svelte:head>
    <title>
        {Halfbody.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <InfoPage info={Halfbody}/>

    <Body>
        <NotDone/>
    </Body>

</div>
