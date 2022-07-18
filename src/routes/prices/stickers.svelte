<script>
    import globalVars from "../../vars/GlobalVars.js";
    import Stickers from "../../vars/comms/Stickers.js"
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
</script>

<svelte:head>
    <title>
        {Stickers.name} - Teg Fox
    </title>
</svelte:head>

<div>
    <Title img={Stickers.img} title={Stickers.name} contain={Stickers.contain}>
        {Stickers.desc}
    </Title>

    <Body>
    <NotDone/>
    </Body>

</div>
