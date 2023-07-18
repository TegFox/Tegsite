<script>
    import gvars from '../../vars/GlobalVars.js'
    import Goto from "../common/Goto.svelte"
    import Prices from "../../assets/prices.png"
    import YCH from "../../assets/ych.png"
    import Terms from "../../assets/terms.png"
    import About from "../../assets/about.png"

    export let overlay

</script>

<div class="grid">

    <div class="grid-1">
        <Goto background={`url(${Prices})`} {overlay} href="/prices" title="Prices" sub="Learn More"/>
    </div>

    <div class="grid-2">
        <Goto background={`url(${YCH})`} {overlay} href="/ych" title="YCH" sub="Your Character Here. Learn More"/>
    </div>

    <div class="grid-3">
        <Goto background={`url(${Terms})`} {overlay} href="/terms" title="Terms & FAQ" sub="Learn More"/>
    </div>

    <div class="grid-4">
        <Goto background={`url(${About})`} {overlay} href="/about" title="About Me!" sub="Learn More"/>
    </div>

</div>

<style>

    .grid {
        display: grid;
        grid-row-gap: 1rem;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1rem;
        grid-template-columns: 1fr 1fr;
    }

    .grid-1 {
        grid-row: 1;
        grid-column: 1;
    }

    .grid-2 {
        grid-row: 2;
        grid-column: 1;
    }

    .grid-3 {
        grid-row: 1;
        grid-column: 2;
    }

    .grid-4 {
        grid-row: 2;
        grid-column: 2;
    }

    @media (max-width: 880px) {

        .grid {
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-template-columns: 1fr;
            grid-row-gap: 2rem;
        }

        .grid-1 {
            grid-row: 1;
            grid-column: 1;
        }

        .grid-2 {
            grid-row: 2;
            grid-column: 1;
        }

        .grid-3 {
            grid-row: 3;
            grid-column: 1;
        }

        .grid-4 {
            grid-row: 4;
            grid-column: 1;
        }

    }

</style>
