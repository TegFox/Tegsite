<script>
    import globalVars from "../../vars/GlobalVars.js";

    import nd from '../../assets/notdone.png'
    import Card from "../../lib/Card.svelte";
</script>

<Card background={globalVars.colors.teg_grey}>
    <div class="col-center">
        <img src={nd} alt="Dumb animal doing web dev" style:width="50vh" style:max-width="70vw" />
        <div class="h4 allcaps wide tac">
            This page isn't done yet oops
        </div>
    </div>
</Card>
