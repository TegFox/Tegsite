<script>
    export let color
</script>

<div class="body-div" style:background-color={color}>
    <slot/>
</div>

<style>

    .body-div {
        padding: 4rem;
    }

    @media only screen and (max-device-width: 600px)
    {
        .body-div {
            padding: 2rem;
        }
    }

</style>