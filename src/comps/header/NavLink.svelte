<script>
    import { page } from '$app/stores'
    export let href
    export let open

const curpage = (path, target) => {
    if (target === "/" && path === "/") return true;
    else if (target !== "/" && path.substring(0, target.length) === target) return true;
    return false;
}

</script>

<a {href} on:click={() => {open = false}} class:active={curpage($page.url.pathname, href)} class="hover">
    <slot/>
    <div class="hover bar" class:open={curpage($page.url.pathname, href)}></div>
</a>

<style>

    a {
        transition: all 0.3s cubic-bezier(0, 0.8, 0.5, 1);
        font-size: var(--header-font-size);
        color: white;
        text-decoration: none;
        -webkit-transform: translate3d(0, 0, 0);
        white-space: nowrap;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a:hover {
        opacity: 0.8;
    }

    @media (max-width: 700px) {
        a {
            align-items: flex-end;
        }
    }

    .bar {
        text-align: center;
        height: 2px;
        width: 0;
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
        font-weight: 900;
    }

    @media (max-width: 700px) {
        a {
            font-size: calc(var(--header-font-size) * 1.5);
        }
    }

</style>
