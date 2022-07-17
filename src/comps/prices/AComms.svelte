<script>

    import src from '../../assets/ad_before.png'
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";

</script>


<div class="col-center">

    <SideBySideUneven leftWidth="256px" width="800px">
        <div slot="left" >
            <img {src} class="img"/>
        </div>
        <div slot="right" class="text">
            <p class="h3 allcaps wide">
                Adult art?
            <p>
                I do offer NSFW commissions! While no NSFW art is on this site, I do have some information about the
                commission process that may be helpful!
            <p>
                <strong>
                    This is only for people 18 and over.
                </strong>
            </p>
            <a class="text link" href="/nsfw">
                Learn more!
            </a>
        </div>
    </SideBySideUneven>

</div>

<style>

    .img {
        width: 256px;
    }

</style>
