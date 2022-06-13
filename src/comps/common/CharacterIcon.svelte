<script>

    import Card from "../../lib/Card.svelte";

    export let img
    export let name
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
                <img src={img} class="charicon-img"/>
                {name}
            </div>
        </Card>
    </div>
</a>


<style>

    .charicon-img {
        height: 8rem;
    }

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

    @media (max-width: 700px) {
        .charicon-img {
            height: 6rem;
        }
        .charicon-text {
            font-size: 1rem;
        }
        .charicon-bold {
            font-size: 1.25rem;
        }
    }

</style>
