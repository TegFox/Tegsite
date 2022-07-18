<script>
    import globalVars from "../../vars/GlobalVars.js";
    import RefSheet from "../../vars/comms/RefSheet.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {RefSheet.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={RefSheet.img} title={RefSheet.name}>
        {RefSheet.desc}
    </Title>

    <Body>
        <NotDone/>
    </Body>

</div>
