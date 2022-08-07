<script>

    import {page} from "$app/stores";
    import chars from '../vars/Chars.js'
    import Error from "../comps/common/Error.svelte";
    import SideBySide from "../lib/SideBySide.svelte";
    import oops from '../assets/notdone.png'
    import NotDone from "../comps/common/NotDone.svelte";
    import Body from "../lib/Body.svelte";

    let char
    $ : char = chars[$page.url.searchParams.get('name')?.toLowerCase()]
</script>

<div style:height="100vh" style:width="100vw">


    {#if char}

        <div style:height=100% class="row-center">
            <div style:width="100vw">
                <Body>
                    <NotDone/>
                </Body>
            </div>
        </div>

    {:else}

        <div style:height=100% style:width=100% class="row-center">
            <div style:width=100% class="col-center">
                <img src={oops} style:width="400px"/>
            </div>
        </div>

    {/if}


</div>

<style>



</style>
