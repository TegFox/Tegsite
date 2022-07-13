<script>
    import globalVars from "../../globalVars.js";
    import commtypes from "../../commtypes.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {commtypes.headshot.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={commtypes.headshot.img} title={commtypes.headshot.name}>
        {commtypes.headshot.desc}
    </Title>

    <Body>
        <NotDone/>
    </Body>

</div>
