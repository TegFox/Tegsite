<script>
    export let align
    export let direction
    export let gap
</script>

<div class="hsp" style="align-items: {align}; flex-direction: {direction}; gap: {gap};" >
    <slot/>
</div>

<style>
    .hsp {
        display: flex;
        wrap-option: wrap;
    }
</style>