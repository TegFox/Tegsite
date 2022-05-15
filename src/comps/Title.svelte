<script>
    export let img
    export let title

    const parallaxconst = 0.5;
    let scroll
</script>

<svelte:window bind:scrollY={scroll}/>

<main>
    <div class="out">
        <div class="out out-bg"
             style:position="absolute"
             style:transform={`translate3d(0, ${scroll * parallaxconst}px, 0)`}
             style:background-image={`url(${img})`}></div>
        <div class="out out-overlay" style="background-image: linear-gradient(transparent 25%, black 95%)"></div>
        <div class="title">
            {title}
            <slot/>
        </div>
        <div class="hidey-hole" style:height="calc(100vh * {parallaxconst})">
            <!-- this div exists purely to hide the background to support parallax -->
            <!-- this is a dumb solution!! but i don't how to do it better!! -->
        </div>
    </div>
</main>

<style>

    :root {
        --height: 80vh;
    }

    .out {
        height: var(--height);
        min-width: 100%;
    }

    .out-bg {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(75%);
        z-index: -2;
    }

    .out-overlay {
        position: absolute;
        top: 0;
    }

    .title {
        bottom: calc(100vh - var(--height));
        position: absolute;
        font-weight: bold;
        font-size: 5rem;
        padding: 3rem;
    }

    .hidey-hole {
        position:absolute;
        top: var(--height);
        width: 100vw;
        z-index: -1;
        background: black;
    }

</style>