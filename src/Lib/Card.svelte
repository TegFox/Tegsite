<script>
    export let color = '#222222'
    export let borderRadius = '16px'
    export let padding = '3rem 2rem'

</script>


<div class="card-outer"
     style:border-radius={borderRadius}
     style:padding
     style:background="{color}">
    <slot/>
</div>


<style>

</style>