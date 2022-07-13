<script>
    import globalVars from "../globalVars.js";
    import img from "../assets/ych.png"
    import Title from "../comps/common/Title.svelte";
    import Body from "../lib/Body.svelte";
    import NotDone from "../comps/common/NotDone.svelte";
    import Comms from "../comps/common/Comms.svelte";
</script>

<title>
    Your Character Here - Teg Fox
</title>

<div>
    <Title {img} title="Your Character Here">
        All of the YCH art I offer (or have offered)
    </Title>

    <Body>
        <Comms status={globalVars.comms} large={false}/>
    </Body>

    <Body>
        <NotDone/>
    </Body>
</div>
