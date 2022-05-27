<script>
    import NavLink from "../Lib/NavLink.svelte"
    export let mobile

</script>


<div class="flex-out">

    <NavLink href="/">
        HOME
    </NavLink>

    <NavLink>
        COMMISSIONS
    </NavLink>

    <NavLink>
        YCH
    </NavLink>

    <NavLink>
        TERMS & FAQ
    </NavLink>

    <NavLink>
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
