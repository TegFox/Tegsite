<script>
    import gvars from '../../globalVars.js'
    import StackPanel from "../../lib/StackPanel.svelte"
    import Goto from "../common/Goto.svelte"
    import Prices from "../../assets/prices.png"
    import YCH from "../../assets/ych.png"
    import Terms from "../../assets/terms.png"
    import About from "../../assets/about.png"

    export let overlay

</script>

<div class="mobilewrap-flexbox">
    <div class="mobilewrap-flexitem">
        <StackPanel direction="column" gap="2rem" align="stretch">
            <Goto background={`url(${Prices})`} {overlay} href={gvars.links.prices.path} title="Prices" sub="Learn More"/>
            <Goto background={`url(${YCH})`} {overlay} href={gvars.links.ych.path} title="YCH" sub="Your Character Here. Learn More"/>
        </StackPanel>
    </div>
    <div class="mobilewrap-flexitem">
        <StackPanel direction="column" gap="2rem" align="stretch">
            <Goto background={`url(${Terms})`} {overlay} href={gvars.links.termsfaq.path} title="Terms & FAQ" sub="Learn More"/>
            <Goto background={`url(${About})`} {overlay} href={gvars.links.about.path} title="About Me!" sub="Learn More"/>
        </StackPanel>
    </div>
</div>

<style>

    .mobilewrap-flexbox {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: stretch;
        align-content: stretch;
    }

    .mobilewrap-flexitem {
        width: 100%;
    }

    @media (max-width: 880px) {
        .mobilewrap-flexbox {
            flex-direction: column;
        }
    }

</style>
