<script>
    import NavLink from "../Lib/NavLink.svelte"
    import globalVars from "../globalVars.js";
</script>


<div class="flex-out">

    {#each globalVars.links as link, i}
        <NavLink href={link.path}>
            {link.name}
        </NavLink>
    {/each}

</div>


<style>
    .flex-out {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        overflow-y: scroll;
    }
</style>
