<script>
    import SideBySide from "../../lib/SideBySide.svelte";
    import src from '../../assets/3c.png'
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
</script>

<div class="col-center">
    <SideBySideUneven leftWidth="256px" width="800px">
        <div slot="left" class="tac">
            <img {src} alt=":3c" class="img"/>
        </div>
        <div slot="right">
            <p class="h3">
                Couldn't find what you're looking for?
            <p>
            This page doesn't include everything that I do! If you want me to give you a quote on something not listed
            here, just shoot me a message!
            <p>
                <a class="link" href="/about">
                    My Contact Info!
                </a>
            </p>

        </div>
    </SideBySideUneven>
</div>

<style>

    .img {
        height: 256px
    }

    @media (max-width: 825px) {
        .img {
            height: 192px;
        }
    }

</style>
