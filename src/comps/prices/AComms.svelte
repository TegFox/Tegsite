<script>
    import GlobalVars from "../../vars/GlobalVars.js";
    import src from '../../assets/gay.png'
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
    import Card from "../../lib/Card.svelte";

</script>


<Card background={`linear-gradient(-45deg, #151515, #172C50cc`}>
    <div class="col-center">
        <SideBySideUneven leftWidth="192px" width="750px" align="center">
            <div slot="left" class="col-center">
                <img {src} class="img"/>
            </div>
            <div slot="right" class="text">
                <p class="h3 allcaps wide" style:margin-top="0">
                    Adult art
                <p>
                    While no NSFW art is on this site, I do have some information about the
                    commission process that may be helpful!
                <p class="allcaps wide">
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
</Card>

<style>

    p {
        margin: 0.75rem 0;
    }

    .img {
        height: 192px;
    }

</style>
