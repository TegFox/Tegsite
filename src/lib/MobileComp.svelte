<script>

</script>

<div class="outer">
    <div class="main">
        <slot name="main"/>
    </div>
    <div class="alt">
        <slot name="alt"/>
    </div>
</div>

<style>

    .main {
        display: block;
    }

    .alt {
        display: none;
    }

    @media only screen and (max-device-width: 700px) {

        .main {
            display: none;
        }

        .alt {
            display: block;
        }

    }

</style>
