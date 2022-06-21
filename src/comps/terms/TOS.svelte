<script>
    import Body from "../../lib/Body.svelte";
    import Card from "../../lib/Card.svelte";
    import globalVars from "../../globalVars.js";
    import Divider from "../../lib/Divider.svelte";
</script>

<Body>
    <Card background={globalVars.colors.teg_grey}>
        <div class="col-center">
            <div class="faq-outer tac bold allcaps wide h2">
                Terms of Service
            </div>
            <div class="text faq-outer">
                <p>
                    My commissioning me, you agree to the terms of service stated here. If you have any questions that aren't
                    answered in the terms of service or the Frequently Asked Questions (FAQ), don't hesitate to contact me.
                <p>
                    Last Updated: 2022-06-21

                <Divider/>

                <p class="h4 faq-sec-header">
                    Things You Should Have Before Commissioning
                <p>
                    Please have these the following things ready when I contact you so I can streamline the commission
                    process!
                <ul class="faq-list">
                    <li>A good idea of what you want for your commission (and possibly a backup idea if I cannot fulfill
                        your original). In most cases, I generally do not take "Artist's Choice" commissions.
                    <li>A character reference, or artwork of your character I can use as a reference.
                    <li>A method to pay for your commission.
                    <li>At least one method for me to contact you that you check regularly.
                </ul>

                <p class="h4 faq-sec-header">
                    Character Reference Policy
                <p>
                    For all commissions I need a reference image of your characters. If your reference is traditional,
                    you must give me color codes (RGB, HSL) for your character.
                <p>
                    The only exception is for reference
                    sheets, where there's an extra charge for not having references beforehand.

                <p class="h4 faq-sec-header">
                    Things I will not draw
                <ul class="faq-list">
                    <li>No Humans / Humanoids
                    <li>No Gore or Violence
                    <li>No Overly Complex Characters
                    <li>No Extremely Large Groups
                    <li>No Copyrighted Characters
                </ul>
                <p>
                    If you would like an exception to this rule, please ask me.

                <p class="h4 faq-sec-header">
                    Payment Policy
                <p>
                    All prices and quotes are listed in US Dollars (USD).
                <p>
                    I take payment through PayPal, Venmo, CashApp, or Credit/Debit. I will generally ask for payment
                    after I have a completed sketch of your artwork.
                <p>
                    If you are unsure about whether you can pay, or don't have access to the aforementioned payment
                    methods, let me know ahead of time so we can work something out; otherwise I will have to cancel
                    your commission.

                <p class="h4 faq-sec-header">
                    Artist's Rights
                <ul class="faq-list">
                    <li>I reserve the right to post, share, and publish all artwork that I create
                    <li>I may reuse poses or sketches for other work
                    <li>I can alter the final cost of a commission, or reject/cancel a commission, at my discretion
                    <li>I reserve the right to alter the Terms of Service without notice
                    <li>I reserve the right to request people to take down my art from public or private platforms
                </ul>

                <p class="h4 faq-sec-header">
                    Commissioners's Rights
                <ul class="faq-list">
                    <li>You may request work in progress snapshots of your commission
                    <li>You may ask for a limited amount of changes throughout the process
                    <li>You may request a refund until a certain point, though you may not receive the full amount
                    <li>You may use the art for personal use and post wherever you'd like (make sure to credit me!)
                    <li>You may edit the art however you like unless they remove my watermark (if present), or put
                        me or any related individual in a bad light. If possible please ask me for approval beforehand.
                </ul>

                <p class="h4 faq-sec-header">
                    Cryptocurrency, Blockchain, and NFTs
                <p>
                    None of my art or any other work products may be used in any blockchain-related technology, including
                    NFTs, cryptocurrencies, or any future inventions or creations relating to any cryptocurrencies or
                    blockchains (aka the world's least efficient linked list).

                <p class="h4 faq-sec-header">
                    18+ Works
                <p>
                    If you are under the age of 18, do not ask for, request, or commission NSFW artwork from me
                    (or anyone else tbh).
                <p> If you have any questions, don't hesitate to shoot me a DM! Sorry for the inconvenience!

                <div class="col-center h4 tac">
                    <p> TL;DR: Use common sense and don't be a dick
                </div>

            </div>
        </div>
    </Card>
</Body>

<style>

    .faq-outer {
        width: 100%;
        max-width: 60rem;
    }

    .faq-list {
        list-style-type: circle;
    }

    li {
        margin: 0.5rem 0;
    }

    .faq-sec-header {
        margin-top: 3rem;
    }

</style>
