<script>
    export let img
    export let title
    export let height
    export let background = 'black'


    import {browser} from "$app/env";
    if (browser && height) {
        document.documentElement.style.setProperty("--height", height);
        document.documentElement.style.setProperty("--bg", background);
    }

    let overlaybg = `linear-gradient(transparent 25%, ${background} 95%)`

    const parallaxconst = 0.6;
    let scroll
</script>

<svelte:window bind:scrollY={scroll}/>


<main>
    <div class="out">
        <div class="out out-bg"
             style:position="absolute"
             style:transform={`translate3d(0, ${scroll * parallaxconst}px, 0)`}
             style:background-image={`url(${img})`}></div>
        <div class="out out-overlay" style:background-image={overlaybg}></div>
        <div class="title">
            <div class="title-head">
                {title}
            </div>
            <div class="title-body">
                <slot/>
            </div>
        </div>
        <div class="hidey-hole" style:height="calc(100vh * {parallaxconst})">
            <!-- this div exists purely to hide the background to support parallax -->
            <!-- this is a dumb solution!! but i don't how to do it better!! -->
        </div>
    </div>
</main>

<style>

    :root {
        --height: 70vh;
        --title-pad-h: 8vw;
        --title-fontsize: 5rem;
        --title-mobile-fontsize: 3.6rem;
        --title-body-fontsize: 2rem;
        --title-body-mobile-fontsize: 1.2rem;

        --bg: black;
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
        padding: 4rem var(--title-pad-h);
        max-width: calc(100vw - 2 * var(--title-pad-h));
        overflow-x: hidden;
    }

    .title-head {
        font-weight: bold;
        font-size: 5rem;
        overflow-x: hidden;
    }

    .title-body {
        font-variant: all-small-caps;
        font-size: var(--title-body-fontsize);
    }

    @media only screen and (max-device-width: 600px)
    {
        .title-head {
            font-size: var(--title-mobile-fontsize);
        }

        .title-body {
            font-size: var(--title-body-mobile-fontsize)
        }
    }


    .hidey-hole {
        position:absolute;
        top: var(--height);
        width: 100vw;
        z-index: -1;
        background: var(--bg);
    }

</style>