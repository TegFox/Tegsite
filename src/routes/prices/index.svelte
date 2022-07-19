<script>
    import globalVars from "../../vars/GlobalVars.js";
    import img from "../../assets/prices.png"
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import Comms from "../../comps/common/Comms.svelte";
    import CommTypes from "../../comps/prices/CommTypes.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
    import NotDone from "../../comps/common/NotDone.svelte";
    import AComms from "../../comps/prices/AComms.svelte";
    import OldCommTypes from "../../comps/prices/OldCommTypes.svelte";
    import CatchAll from "../../comps/prices/CatchAll.svelte";
</script>

<title>
    Prices - Teg Fox
</title>

<div>
    <Title {img} title="Commission Prices">
        Price estimates for my art!
    </Title>

    <Body>
        <StackPanel direction="column" gap="2rem">
            <Comms status={globalVars.comms} large={false}/>
            <CommTypes routeBase="/prices/"/>
            <AComms/>
        </StackPanel>
    </Body>

    <Body color={globalVars.colors.teg_grey}>
        <CatchAll/>
    </Body>

</div>
