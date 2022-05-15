<script>
    import src from '../assets/logo.png';
    const breakpoint = 90;
    let scroll

    function isScrolled() {
        return (scroll > breakpoint || scroll > breakpoint)
    }
    let scrolled = isScrolled();
</script>

<svelte:window bind:scrollY={scroll} on:scroll={() => scrolled = isScrolled()}/>

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
        --transition: all 0.2s cubic-bezier(0, .5, 0.3, 1);
        --mobile-duration: 0.18s;
        --mobile-delay: 0.1s;

        --tHeight:  10rem;
        --oHeight: 5rem;
        --tImgMargin: 1.5rem;
        --oImgMargin: 0.5rem;
        --tTextSize: 1.5rem;
        --oTextSize: 1.5rem;

        --bgColor: #000000aa;
        --bdf-blur: 6px;

    }

    *{
        transition: var(--transition);
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    .title {
        overflow: hidden;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 100;
        display: flex;
        align-items: center;

        height: var(--tHeight);
        background-color: transparent;
        backdrop-filter: none;
    }

    .title.scrolled {
        height: var(--oHeight);
        background-color: var(--bgColor);
        backdrop-filter: blur(var(--bdf-blur));
    }

    @media only screen and (max-device-width: 600px)
    {
        * {
            transition-delay: var(--mobile-delay);
            transition-duration: var(--mobile-duration);
        }

        .title.scrolled {
            backdrop-filter: none;
        }
    }

    .title-container {
        width: 100%;
        display: flex;
        align-items: center;
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
        font-size: var(--tTextSize);
    }

    .rdiv.scrolled {
        font-size: var(--oTextSize);
    }

    .logo-img {
        height: calc(var(--tHeight) - 2 * var(--tImgMargin));
        margin-left: var(--tImgMargin);
    }

    .logo-img.scrolled {
        height: calc(var(--oHeight) - 2 * var(--oImgMargin));
        margin-left: var(--oImgMargin);
    }

</style>
