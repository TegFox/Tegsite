<script>
    import Body from "../Lib/Body.svelte";
</script>

<Body color="192231">
    <div class="fh1">
        You've Reached The End.
    </div>
    <a href="#" style:text-decoration="none" style:color="grey">
        <div style:margin="0.5rem 0">
            Go back to top
        </div>
    </a>
    <p>
        © Teg Fox {new Date().getFullYear()}. All Rights Reserved.
    </p>
</Body>

<style>
    .fh1 {
        font-size: 2rem;
        font-weight: bold;
    }
</style>