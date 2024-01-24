<script>
    export let background
</script>

<div class="body-div" style:background>
    <slot/>
</div>

<style>

    .body-div {
        padding: 3rem 4rem;
        background-position: center;
        background-size: cover;
    }

    @media  (max-width: 700px)
    {
        .body-div {
            padding: 1.25rem;
        }
    }

</style>
