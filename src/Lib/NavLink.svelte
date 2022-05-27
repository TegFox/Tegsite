<script>
    import { page } from '$app/stores'
    import { scrollTop } from 'svelte-scrolling'
    export let href

</script>

<a {href} on:click={() => scrollTop()} class:active={$page.url.pathname === href}>
    <slot/>
</a>

<style>

    a {
        color: white;
        text-decoration: none;
        -webkit-transform: translate3d(0, 0, 0);
        white-space: nowrap;
        cursor: pointer;
    }

    .active {
        font-weight: bolder;
        font-size: var(--header-active-font-size);
    }
</style>
