<script>
    import Body from "../../lib/Body.svelte";
    import {browser} from "$app/environment";

    const scrollToTop = () => {
        if (browser) window.scrollTo({top: 0, behavior: 'smooth'})
    }
</script>

<Body color="192231">
    <div class="h3">
        You've Reached The End.
    </div>
    <div style="display: flex; flex-direction: row">
        <div on:click={scrollToTop} style:text-decoration="none" style:color="grey"
             style:cursor="pointer" style:user-select="none">
            <div style:margin="0.5rem 0">
                Go back to top
            </div>
        </div>
    </div>
    <p>
        © Teg Fox {new Date().getFullYear()}. All Rights Reserved.
    </p>
</Body>
