<script>
    import {fly} from 'svelte/transition'
    import NavLink from "../Lib/NavLink.svelte";
    import globalVars from "../globalVars.js";

    export let open

</script>


<div class="mobilemenu-out">

    {#each Object.keys(globalVars.links) as key, i}

        <div transition:fly={{x: 15, delay: 50 * i}}>
            <NavLink href={globalVars.links[key].path} bind:open>
                {globalVars.links[key].name.toUpperCase()}
            </NavLink>
        </div>

    {/each}



</div>


<style>

    .mobilemenu-out {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 3vh;
    }

</style>
