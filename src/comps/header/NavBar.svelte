<script>
    import NavLink from "../../lib/NavLink.svelte"
    import globalVars from "../../globalVars.js";
</script>


<div class="flex-out">

    {#each Object.keys(globalVars.links) as key}
        <NavLink href={globalVars.links[key].path}>
            {globalVars.links[key].sname.toUpperCase()}
        </NavLink>
    {/each}

</div>


<style>
    .flex-out {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
</style>
