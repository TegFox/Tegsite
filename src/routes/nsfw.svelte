<script>

import Title from "../comps/common/Title.svelte";
import NotDone from "../comps/common/NotDone.svelte";
import Body from "../lib/Body.svelte";
import Comms from "../comps/common/Comms.svelte";
import globalVars from "../globalVars.js";
</script>

<title>
    NSFW - Teg Fox
</title>

<div>
    <Title title="NSFW Info">
        If you are under the age of 18, please leave. now.
    </Title>

    <Body>
        <Comms status={globalVars.comms} large={false}/>
    </Body>

    <Body>
        <NotDone/>
    </Body>

</div>
