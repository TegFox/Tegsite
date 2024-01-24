<script>
    import src from '../../assets/logo.png';
    import NavBar from "./NavBar.svelte";
    import MobileNavBar from "./MobileNavBar.svelte";
    import ReactiveComp from "../../lib/ReactiveComp.svelte";

    export let breakpointVh = 20

    let vpHeight, scroll, scrolled
    let open = false

    const vhToPx = (val) => val * vpHeight / 100

    $: scrolled = scroll > vhToPx(breakpointVh);
</script>

<svelte:window bind:scrollY={scroll} bind:outerHeight={vpHeight}/>

<header class="col-center">
    <!--This is a dumb workaround for the mobile stuff-->
    <div class="title-dim header-effects" class:scrolled></div>

    <div class="title title-dim" class:scrolled>
        <div class="container" class:scrolled>
            <div style:grid-column="1" style:text-align="left" style:width="100%" style:display="flex">
                <a href="/" on:click={() => {open = false}} style:display="flex">
                    <img {src} alt="Site Logo" class='logo-img' class:scrolled id="logo"/>
                </a>
            </div>
            <div style:grid-column="2">
                <div style:display="flex" style:flex-direction="row-reverse">
                    <ReactiveComp>
                        <div slot="main">
                            <NavBar/>
                        </div>
                        <div slot="alt">
                            <MobileNavBar bind:open={open}/>
                        </div>
                    </ReactiveComp>
                </div>
            </div>
        </div>
    </div>
</header>

<style>
    :root {
        --header-transition: all 0.3s cubic-bezier(0, 0.8, 0.5, 1);

        --header-height:  10rem;
        --header-top-img-margin: 1.5rem;
        --header-scrolled-img-margin: 0.5rem;
        --header-font-size: 1.25rem;

        --header-background: #000000aa;
        --header-blur-amount: 6px;
    }

    /*Applying transition to all elements in the header*/
    *{
        transition: var(--header-transition);
    }

    /*Title bar layouting*/
    .title {
        z-index: 10;
        display: flex;
        align-items: center;
    }

    /*Title bar dimensions and misc behavior*/
    .title-dim {
        overflow: hidden;
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        top: 0;
        height: var(--header-height);
    }

    /*Reduce height of titlebar when scrolled*/
    .title-dim.scrolled {
        height: calc(var(--header-height) / 1.8);
        width: calc(100% - 2*1rem);
        margin: 1rem;
        border-radius: 1rem;
    }

    /*Background effects to display when scrolled*/
    .header-effects.scrolled {
        z-index: 10;
        background-color: var(--header-background);
        backdrop-filter: blur(var(--header-blur-amount)) saturate(140%);
        -webkit-backdrop-filter: blur(var(--header-blur-amount)) saturate(140%);
        border: #ffffff44 1px solid;
    }

    /*Grid container for left (logo) and right (buttons) sides of header*/
    .container {
        display: grid;
        align-items: center;
        width: 100%;
        margin: 0 3rem 0 1rem;
    }

    .container.scrolled {
        margin: 0 2rem 0 1rem;
    }

    /*Style for logo image*/
    .logo-img {
        height: calc(var(--header-height) - 2 * var(--header-top-img-margin));
        margin-left: var(--header-top-img-margin);
        filter: drop-shadow(2px 2px 8px #00000044);
        z-index: 50;

        /*These help fix weird flashing issues on webkit and chromium*/
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    /*Shrinks logo when scrolled*/
    .logo-img.scrolled {
        height: calc(var(--header-height) / 2.25 - var(--header-scrolled-img-margin));
        margin-left: var(--header-scrolled-img-margin);
    }

    @media (max-width: 825px) {
        .container {
            margin-left: 0;
            margin-right: 3rem;
        }
    }

    @media (min-width: 1400px) {
        .title-dim.scrolled {
            width: 1300px;
        }
    }

</style>