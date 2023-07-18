<script>
    import NavLink from "./NavLink.svelte"
</script>


<div class="flex-out">

    <NavLink href="/">
        HOME
    </NavLink>
    <NavLink href="/prices">
        PRICES
    </NavLink>
    <NavLink href="/ych">
        YCH
    </NavLink>
    <NavLink href="/terms">
        TERMS/FAQ
    </NavLink>
    <NavLink href="/about">
        ABOUT
    </NavLink>

</div>


<style>
    .flex-out {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }
</style>
