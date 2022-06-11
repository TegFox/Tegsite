<script>
    export let align
    export let direction
    export let gap
    export let width
    export let height
    export let style = ''
    export let styleClass = ''
</script>

<div class="hsp {styleClass}" style:width style:height
     style="align-items: {align}; flex-direction: {direction}; gap: {gap}; flex-wrap:wrap; {style}" >
    <slot/>
</div>

<style>
    .hsp {
        display: flex;
        wrap-option: wrap;
    }
</style>
