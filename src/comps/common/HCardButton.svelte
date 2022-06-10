<script>
    import CardButton from "../../lib/CardButton.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";

    export let href
    export let background
    export let padding
    export let gap = '0.5rem'

</script>

<CardButton {href} {background} {padding}>
    <StackPanel direction="row" {gap} align="center">
        <slot/>
    </StackPanel>
</CardButton>
