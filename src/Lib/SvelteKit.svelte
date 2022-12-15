<script>
    import svlogo from '../assets/icons/svelte.svg'
    import svwm from '../assets/icons/sveltekit.svg'
    import StackPanel from "./StackPanel.svelte";

    export let width = '100%'
    export let margin = '2rem 0'
    export let maxWidth
</script>

<div style:width style:margin style:max-width={maxWidth}>
    <StackPanel direction="row" gap="5%">
        <img src={svlogo} alt="SvelteKit logo" width="15%"/>
        <img src={svwm} alt="SvelteKit Word Mark" width="80%"/>
    </StackPanel>
</div>
