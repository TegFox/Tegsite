<script>
import img from '../../../assets/klaus.png'
import Title from "../../../comps/common/Title.svelte";
import NotDone from "../../../comps/common/NotDone.svelte";
import Body from "../../../lib/Body.svelte";
import Comms from "../../../comps/common/Comms.svelte";
import globalVars from "../../../vars/GlobalVars.js";
</script>

<title>
    NSFW - Teg Fox
</title>

<div>
    <Title title="NSFW Info" {img}>
        NSFW Art Commission process info!
    </Title>

    <Body>
        <Comms status={globalVars.comms} large={false}/>
    </Body>

    <Body>
        <NotDone/>
    </Body>

</div>
