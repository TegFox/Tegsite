<script>
    export let img
</script>

<div class="body-div" style:background-image={`url(${img})`} >
    <slot/>
</div>

<style>

    .body-div {
        padding: 3rem 4rem;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        -webkit-background-size: cover;
    }

    @media  (max-width: 700px)
    {
        .body-div {
            padding: 2rem;
        }
    }

    @media only screen and (max-width: 1366px) {
        .body-div {
            background-attachment: scroll;
        }
    }

</style>
