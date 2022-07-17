<script>
    import globalVars from "../../globalVars.js";
    import commtypes from "../../commtypes.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
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
        <StackPanel direction="column">

        </StackPanel>
    </Body>

    <Body>
        <NotDone/>
    </Body>

</div>
