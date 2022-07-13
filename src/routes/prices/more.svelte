<script>
    import globalVars from "../../globalVars.js";
    import commtypes from "../../commtypes.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {commtypes.more.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={commtypes.more.img} title={commtypes.more.name}>
        {commtypes.more.desc}
    </Title>

    <Body>
        <NotDone/>
    </Body>

</div>
