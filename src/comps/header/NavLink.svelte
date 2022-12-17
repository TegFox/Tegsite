<script>
    import { page } from '$app/stores'
    export let href
    export let open

</script>

<a {href} on:click={() => {open = false}} class:active={$page.url.pathname === href} class="hover">
    <slot/>
    <div class="hover bar" class:open={$page.url.pathname === href}></div>
</a>

<style>

    a {
        font-size: var(--header-top-font-size);
        color: white;
        text-decoration: none;
        -webkit-transform: translate3d(0, 0, 0);
        white-space: nowrap;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 700px) {
        a {
            align-items: flex-end;
        }
    }

    .bar {
        text-align: center;
        height: 2px;
        width: 0%;
        background: white;
        border-radius: 1px;
        transition: 0.2s;
    }

    .hover:hover .bar {
        width: 100%;
    }

    .open {
        width: 100%;
    }

    .active {
        font-weight: bold;
        font-size: var(--header-active-font-size);
    }

    @media (max-width: 700px) {
        a {
            font-size: calc(var(--header-top-font-size) * 1.5);
        }

        .active {
            font-size: calc(var(--header-active-font-size) * 1.5);
        }
    }

</style>
