<script>
    import { page } from '$app/stores'
    import { scrollTop } from 'svelte-scrolling'
    export let href
    export let open

</script>

<a {href} on:click={() => {open = false}} class:active={$page.url.pathname === href}>
    <slot/>
</a>

<style>

    a {
        font-size: var(--header-top-font-size);
        color: white;
        text-decoration: none;
        -webkit-transform: translate3d(0, 0, 0);
        white-space: nowrap;
        cursor: pointer;
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
