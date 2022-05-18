<script>
    import src from '../assets/logo.png';
    export let breakpointVh = 20
    let vpHeight
    let scroll

    function vhToPx(val) {
        return val * vpHeight / 100
    }

    function isScrolled() {
        return (scroll > vhToPx(breakpointVh) || scroll > vhToPx(breakpointVh))
    }
    let scrolled = isScrolled();
</script>

<svelte:window bind:scrollY={scroll} on:scroll={() => scrolled = isScrolled()} bind:outerHeight={vpHeight}/>

<main>
    <div class="pre">
    </div>
    <header class='title' class:scrolled>
        <div class="title-container">
            <div class='ldiv'>
                <img {src} class='logo-img' class:scrolled id="logo"/>
            </div>

            <div class='rdiv' class:scrolled>
                <a href="#home">HOME</a>
            </div>
        </div>
    </header>
</main>

<style>
    :root {
        --header-transition: all 0.3s cubic-bezier(0, 0.75, 0.25, 1);
        --header-mobile-transition: all 0.3s cubic-bezier(0, 0.6, 0.4, 1);

        --header-top-height:  10rem;
        --header-scrolled-height: 5rem;
        --header-top-img-margin: 1.5rem;
        --header-scrolled-img-margin: 0.5rem;
        --header-top-font-size: 1.5rem;
        --header-scrolled-font-size: 1.5rem;

        --header-background: #000000aa;
        --header-blur-amount: 6px;
    }

    *{
        transition: var(--header-transition);
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        -webkit-transform: translate3d(0, 0, 0);
    }

    .title {
        overflow: hidden;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 100;
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

    @media only screen and (max-device-width: 600px)
    {
        * {
            transition: var(--header-mobile-transition);
        }

        .title.scrolled {
            backdrop-filter: none;
        }
    }

    .title-container {
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
    }

    .rdiv {
        width: auto;
        float: right;
        margin-right: 5rem;
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
        filter: drop-shadow(2px 2px 8px #00000088);
    }

    .logo-img.scrolled {
        height: calc(var(--header-scrolled-height) - 2 * var(--header-scrolled-img-margin));
        margin-left: var(--header-scrolled-img-margin);
        filter: none;
    }

</style>
