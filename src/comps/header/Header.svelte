<script>
    import src from '../../assets/logo.png';
    import NavBar from "./NavBar.svelte";
    import MobileNavBar from "./MobileNavBar.svelte";
    import {fly} from 'svelte/transition'
    import globalVars from "../../vars/GlobalVars.js";
    import NavLink from "./NavLink.svelte";

    export let breakpointVh = 20

    let vpHeight
    let scroll
    let scrolled
    let open = false

    function vhToPx(val) {
        return val * vpHeight / 100
    }

    $: scrolled = (scroll > vhToPx(breakpointVh) || scroll > vhToPx(breakpointVh));
</script>

<svelte:window bind:scrollY={scroll} bind:outerHeight={vpHeight}/>

<header class='title' class:scrolled>
    <div class="title-container">
        <div class='ldiv'>
            <a href="/" on:click={() => {open = false}}>
                <img {src} alt="Site Logo" class='logo-img' class:scrolled id="logo"/>
            </a>
        </div>

        <div class='rdiv' class:scrolled>
            <div class="mobile-navbar">
                <MobileNavBar bind:open/>
            </div>
            <div class="navbar">
                <NavBar/>
            </div>
        </div>
    </div>
</header>

{#if open}
    <div class="mobilemenu-out mobile-menu" transition:fly={{x: 150}}>
            {#each Object.keys(globalVars.links) as key, i}
                <div transition:fly={{x: 15, delay: 60 * i}} on:click={() => open = false}>
                    <NavLink href={globalVars.links[key].path} >
                        {globalVars.links[key].sname.toUpperCase()}
                    </NavLink>
                </div>
            {/each}
    </div>
{/if}


<style>
    :root {
        --header-transition: all 0.3s cubic-bezier(0, 0.75, 0.25, 1);
        --header-mobile-transition: all 0.3s cubic-bezier(0, 0.6, 0.4, 1);
        --header-transition-delay: 0.02s;

        --header-top-height:  10rem;
        --header-scrolled-height: 5rem;
        --header-top-img-margin: 1.5rem;
        --header-scrolled-img-margin: 0.5rem;
        --header-top-font-size: 1.25rem;
        --header-scrolled-font-size: 1.25rem;
        --header-active-font-size: 1.25rem;

        --header-background: #000000aa;
        --header-blur-amount: 6px;
    }

    *{
        transition: var(--header-transition);
        transition-delay: var(--header-transition-delay);
    }

    .title {
        overflow: hidden;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 10;
        display: flex;
        align-items: center;

        height: var(--header-top-height);
        background-color: transparent;
        backdrop-filter: none;
    }

    .title.scrolled {
        height: var(--header-scrolled-height);
        background-color: var(--header-background);
        backdrop-filter: blur(var(--header-blur-amount));
    }

    .title-container {
        z-index: 20;
        width: 100%;
        display: flex;
        align-items: center;
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
    }

    .ldiv {
        display: flex;
        align-items: center;
        text-align: left;
        width: 100%;
        margin-left: 1rem;
    }

    .rdiv {
        z-index: 25;
        width: auto;
        float: right;
        margin-right: 2rem;
        font-size: var(--header-top-font-size);
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: translate3d(0, 0, 0);
    }

    .rdiv.scrolled {
        font-size: var(--header-scrolled-font-size);
    }

    .logo-img {
        height: calc(var(--header-top-height) - 2 * var(--header-top-img-margin));
        margin-left: var(--header-top-img-margin);
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: translate3d(0, 0, 0);
        filter: drop-shadow(2px 2px 8px #00000044);
    }

    .logo-img.scrolled {
        height: calc(var(--header-scrolled-height) - 2 * var(--header-scrolled-img-margin));
        margin-left: var(--header-scrolled-img-margin);
        filter: none;
    }

    .mobile-menu {
        z-index: 8;
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        white-space: nowrap;
        background: black;

        padding-top: var(--header-top-height);
        padding-right: 3rem;
    }

    .navbar {
        display: block;
    }

    .mobile-navbar {
        display: none;
    }

    .mobilemenu-out {
        display: none;
    }

    @media (max-width: 700px)
    {

        .ldiv {
            margin-left: 0;
        }

        .rdiv {
            margin-right: 1.5rem;
        }

        .mobile-menu {
            padding-right: 2.5rem;
        }

        .navbar {
            display: none;
        }

        .mobile-navbar {
            display: block;
        }

        .mobilemenu-out {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 3vh;
        }
    }

    @media only screen and (max-device-width: 700px) {
        * {
            transition: var(--header-mobile-transition);
            transition-delay: var(--header-transition-delay);
        }

        .title.scrolled {
            backdrop-filter: none;
        }
    }

</style>
