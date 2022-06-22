<script>
    export let img
    export let title
    export let height = '96vh'
    export let background = 'black'

    const parallaxconst = 0.6;
    const overlaybg = `linear-gradient(transparent 25%, ${background} 95%)`

    let scroll
    let outerHeight
    let pageHeight

    import {browser} from "$app/env";
    import {fade} from "svelte/transition";
    import { page } from '$app/stores'
    import PageTransition from '../../lib/PageTransition.svelte'
    if (browser) pageHeight = document.body.clientHeight

</script>

<svelte:window bind:scrollY={scroll} bind:outerHeight/>

<div>
    <div class="out" style:height>
        <div class="out out-bg"
             style:height
             style:position="absolute"
             style:transform={`translate3d(0, ${scroll < outerHeight ? scroll * parallaxconst : 0}px, 0)`}
             style:background-image={`url(${img})`}></div>
        <div class="out out-overlay"
             style:background-image={overlaybg}
             style:height></div>

        <PageTransition url={$page.url.pathname}>
            <div class="title" style:bottom={`calc(100vh - ${height})`} in:fade>
                <div class="h1 title-head">
                    {title}
                </div>
                <div class="sub1 title-body">
                    <slot/>
                </div>
            </div>
        </PageTransition>

        <div class="hidey-hole"
             style:height="calc(100vh - {height} + {Math.min(outerHeight, scroll)}px )"
             style:top={height}
             style:background>
            <!-- this div exists purely to hide the background to support parallax -->
            <!-- this is a dumb solution!! but i don't how to do it better!! -->
        </div>
    </div>
</div>

<style>

    :root {
        --bg-brightness: 75%;
        --title-pad-h: 8vw;
        --title-fontsize: 5rem;
        --title-mobile-fontsize: 3.6rem;
        --title-body-fontsize: 2rem;
        --title-body-mobile-fontsize: 1.2rem;
    }

    .out {
        min-width: 100%;
    }

    .out-bg {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(var(--bg-brightness));
        z-index: -2;
        transition: none;
        -webkit-transform-style: preserve-3d;
    }

    .out-overlay {
        position: absolute;
        top: 0;
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: translate3d(0, 0, 0);
    }

    @keyframes float {
        0% {
            transform: translate3d(0, 24px, 0);
            opacity: 0;
        }
        60% {
            opacity: 100%;
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    .title {
        animation: 0.5s cubic-bezier(0, 0.5, 0.5, 1) float;
        position: absolute;
        padding: 2rem var(--title-pad-h);
        max-width: calc(100vw - 2 * var(--title-pad-h));
        overflow-x: hidden;
    }

    .title-head {
        overflow-x: hidden;
    }

    .hidey-hole {
        position:absolute;
        width: 100vw;
        z-index: -1;
    }

</style>
