<script>
    import globalVars from "../../globalVars.js";
    import commtypes from "../../commtypes.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {commtypes.refsheet.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={commtypes.refsheet.img} title={commtypes.refsheet.name}>
        {commtypes.refsheet.desc}
    </Title>

    <Body>
        <NotDone/>
        Probably make the header thing title? whatever its called, make it less ugly
    </Body>

</div>
