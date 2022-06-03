<script>
    export let color
</script>

<div class="body-div" style:background={color} >
    <slot/>
</div>

<style>

    .body-div {
        padding: 3rem 4rem;
    }

    @media  (max-width: 600px)
    {
        .body-div {
            padding: 2rem;
        }
    }

</style>
