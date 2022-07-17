<script>
    import src from '../../assets/notdone.png'
    import Body from "../../lib/Body.svelte";
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";

    export let status
    export let message
</script>


<div class="spacer">

</div>

<Body>
<div class="col-center">
    <ReactiveComp825>
        <div slot="main">
            <SideBySideUneven width="90vw" leftWidth="40vw" maxChildWidth="40vw">
                <div slot="left">
                    <img {src} class="img"/>
                </div>
                <div slot="right">
                    <div class="h1 allcaps wide">
                        Oops!
                    </div>
                    <div class="text">
                        There was an error trying to load that page! If you think that there shouldn't be an error
                        here, please shoot me a message so i can try to fix it as soon as i can.
                    </div>

                    <div class="text" style:margin-top="1rem">
                        Status code: <strong>{status}</strong>
                    </div>
                    <div>
                        <code>{message}</code>
                    </div>
                </div>
            </SideBySideUneven>
        </div>
        <div slot="alt">
            <StackPanel direction="column" align="center" gap="1.5rem">
                <img {src} class="img-mobile"/>
                <div class="h1 allcaps wide tac">
                    Oops!
                </div>
                <div class="tac tex">
                    There was an error trying to load that page! If you think that there shouldn't be an error
                    here, please shoot me a message so i can try to fix it as soon as i can.
                </div>
                <div class="text tac" style:margin-bottom="-1rem">
                    Status code: <strong>{status}</strong>
                </div>
                <div class="tac">
                    <code>{message}</code>
                </div>
            </StackPanel>
        </div>
    </ReactiveComp825>
</div>
</Body>

<style>

    .spacer {
        margin: 4.5rem;
    }

    .img {
        width: 40vw;
    }

    .img-mobile {
        width: 360px;
        max-width: 80vw;
    }

</style>
