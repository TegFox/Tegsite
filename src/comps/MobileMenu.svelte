<script>
    import {fly} from 'svelte/transition'
    import NavLink from "../Lib/NavLink.svelte";
    import globalVars from "../globalVars.js";

    export let open

</script>


<div class="mobilemenu-out">

    {#each globalVars.links as link, i}

        <div transition:fly={{x: 15, delay: 50 * i}}>
            <NavLink href={link.path} bind:open>
                {link.name}
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
