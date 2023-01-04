<script>
    export let background = '#222222'
    export let img
    export let borderRadius = '16px'
    export let padding = '3rem 2rem'
    export let height
    export let contain = false
</script>


<div class="card-outer"
     style:border-radius={borderRadius}
     style:height
     style:padding
     style:background
     style:background-image={img ? `url(${img})` : undefined}
     style:background-size={contain ? 'contain' : 'cover'}
     style:background-position="center"
     style:max-width="100vw">
    <slot/>
</div>


<style>

</style>
