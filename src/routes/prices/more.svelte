<script>
    import globalVars from "../../vars/GlobalVars.js";
    import More from "../../vars/comms/More.js";
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {More.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={More.img} title={More.name}>
        {More.desc}
    </Title>

    <Body>
        <NotDone/>
    </Body>

</div>
