<script>

    import Card from "../../lib/Card.svelte";

    export let img
    export let name
    export let size = '8rem'
    export let color = 'white'
    export let href
    export let background = '#00000088'
    export let margin = '0'
    export let bold = false

</script>


<a {href} style:margin>
    <div class="charicon-outer">
        <Card {background} padding="2rem">
            <div class="charicon-text" class:charicon-bold={bold} style:display="flex" style:flex-direction="column"
                 style:gap="0.5rem" style:color style:align-items="center">
                <img src={img} style:height={size}/>
                {name}
            </div>
        </Card>
    </div>
</a>


<style>

    .charicon-text {
        font-size: 1.25rem;
        margin: 0.16rem 0;
    }

    .charicon-bold {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
    }

    .charicon-outer {
        transition: 0.15s;
    }

    .charicon-outer:hover {
        transform: scale(1.05);
    }

</style>
