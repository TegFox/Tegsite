<script>

    import Card from "./Card.svelte";

    export let href
    export let background
    export let padding = '0.75rem'
    export let borderRadius = '8px'

</script>

<a {href} class="cardbutton-outer" style:text-decoration="none" style:color="white" style:cursor="pointer">

    <Card {background} {padding} {borderRadius}>
        <div>
            <slot/>
        </div>
    </Card>

</a>

<style>

    .cardbutton-outer {
        transition: 0.15s ease;
    }

    .cardbutton-outer:hover {
        transform: scale(1.05);
    }

</style>
