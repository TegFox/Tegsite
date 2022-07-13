<script>
    import globalVars from "../../globalVars.js";
    import commtypes from "../../commtypes.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {commtypes.fullbody.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={commtypes.fullbody.img} title={commtypes.fullbody.name}>
        {commtypes.fullbody.desc}
    </Title>

    <Body>
        <NotDone/>
    </Body>

</div>
