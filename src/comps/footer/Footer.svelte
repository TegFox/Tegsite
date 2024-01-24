<script>
    import Body from "$lib/Body.svelte";
    import {browser} from "$app/environment";

    const scrollToTop = () => {
        if (browser) window.scrollTo({top: 0, behavior: 'smooth'})
    }
</script>

<Body>
    <div class="h3">
        You've Reached The End.
    </div>
    <div style="display: flex; flex-direction: row">
        <div on:click={scrollToTop} on:keydown={scrollToTop} class="hover">
            <div style:margin="0.5rem 0">
                Go back to top
            </div>
        </div>
    </div>
    <p>
        © Teg Fox {new Date().getFullYear()}. All Rights Reserved.
    </p>
</Body>

<style>
    .hover {
        text-decoration: none;
        color: white;
        cursor: pointer;
        user-select: none;
        opacity: 0.5;
        transition: 0.15s;
    }

    .hover:hover {
        opacity: 0.25;
    }
</style>
