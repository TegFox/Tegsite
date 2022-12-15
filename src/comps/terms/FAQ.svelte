<script>
    import Body from "../../lib/Body.svelte";
    import Card from "../../lib/Card.svelte";
    import globalVars from "../../vars/GlobalVars.js";
    import Divider from "../../lib/Divider.svelte";
</script>

<Body>
<Card background={globalVars.colors.teg_grey}>
    <div class="col-center">
        <div class="faq-outer tac bold allcaps wide h2">
            Frequently Asked Questions
            <Divider/>
        </div>
        <div class="faq-outer text">
            <p class="h4 faq-sec-header" style:margin-top="1rem">
                When will you write a Frequently Asked Questions page?
            <p>
                When I actually have questions that are Frequently asked oops
        </div>
    </div>
</Card>
</Body>

<style>

    .faq-outer {
        width: 100%;
        max-width: 60rem;
    }

    /* Un-comment this code when there's actually an FAQ with a list LMAO */
    /*.faq-list {*/
    /*    list-style-type: circle;*/
    /*}*/

    /*li {*/
    /*    margin: 0.5rem 0;*/
    /*}*/

    .faq-sec-header {
        margin-top: 3rem;
    }

</style>
