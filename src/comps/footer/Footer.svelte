<script>
    import Body from "../../lib/Body.svelte";
    import { scrollTop } from 'svelte-scrolling'
</script>

<Body color="192231">
    <div class="h3">
        You've Reached The End.
    </div>
    <div style="display: flex; flex-direction: row">
        <a on:click={() => scrollTop()} href="" style:text-decoration="none" style:color="grey" style:pointer="pointer">
            <div style:margin="0.5rem 0">
                Go back to top
            </div>
        </a>
    </div>
    <p>
        © Teg Fox {new Date().getFullYear()}. All Rights Reserved.
    </p>
</Body>
