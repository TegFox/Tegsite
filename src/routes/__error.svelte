<script>
    import src from '../assets/notdone.png'
    import Body from "../lib/Body.svelte";
    import SideBySide from "../lib/SideBySide.svelte";
    import SideBySideUneven from "../lib/SideBySideUneven.svelte";
    import ReactiveComp825 from "../lib/ReactiveComp825.svelte";
    import StackPanel from "../lib/StackPanel.svelte";
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
                            The page you went to doesn't seem to exist for whatever reason!
                            If you think that this page should exist but it doesn't, please shoot me a message and let me know
                            so I can fix it!
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
                        The page you went to doesn't seem to exist for whatever reason!
                        If you think that this page should exist but it doesn't, please shoot me a message and let me know
                        so I can fix it!
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
