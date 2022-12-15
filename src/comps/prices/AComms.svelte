<script>
    import GlobalVars from "../../vars/GlobalVars.js";
    import src from '../../assets/gay.png'
    import SideBySideUneven from "../../lib/SideBySideUneven.svelte";
    import Card from "../../lib/Card.svelte";
    import ReactiveComp825 from "../../lib/ReactiveComp825.svelte";

</script>


<Card>
    <div class="col-center">
        <SideBySideUneven leftWidth="192px" align="center" maxChildWidth="40vw">
            <div slot="left" class="col-center">
                <ReactiveComp825>
                    <div slot="main">
                        <img {src} alt="Sus" class="img"/>
                    </div>
                </ReactiveComp825>
            </div>
            <div slot="right" class="text">
                <p class="h3 allcaps wide half-ls" style:margin-top="0">
                    Adult art
                <p>
                    While no NSFW art is on this site, I do have some information about the
                    commission process that may be helpful!
                <p class="allcaps wide half-ls">
                    <strong>
                        This is only for people 18 and over.
                    </strong>
                </p>
                <a class="text link half-ls" href="/nsfw">
                    Learn more!
                </a>
            </div>
        </SideBySideUneven>
    </div>
</Card>

<style>

    .img {
        height: 192px;
    }

</style>
