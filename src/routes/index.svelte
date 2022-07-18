<script>
    import gvars from "../vars/GlobalVars.js"

    import Title from "../comps/common/Title.svelte"
    import img from '../assets/forest.png'
    import Body from "../lib/Body.svelte"
    import Comms from "../comps/common/Comms.svelte"
    import StackPanel from "../lib/StackPanel.svelte"
    import LocalLinks from "../comps/home/LocalLinks.svelte";
    import HomeLinks from "../comps/home/HomeLinks.svelte";

    const overlay = '#0000002a'
    const socialwidth = '20rem'
</script>

<title>Teg Fox</title>

<div>

    <Title title="Welcome!" {img}>
        Hey! I'm Teg, and I draw fluffy animals!
    </Title>


    <Body>
        <StackPanel direction="column" gap="6rem">
            <Comms status={gvars.comms}/>
            <LocalLinks {overlay}/>
        </StackPanel>
    </Body>

    <Body color={gvars.colors.teg_grey}>
        <HomeLinks {socialwidth}/>
    </Body>

</div>

