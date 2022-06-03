<script>

    import Card from "../Lib/Card.svelte";

    export let img
    export let name
    export let size = '8rem'
    export let color = 'white'
    export let href
    export let background = '#00000088'

</script>


<a {href}>
    <div class="charicon-outer">
        <Card {background} padding="2rem">
            <div style:display="flex" style:flex-direction="column" style:gap="0.5rem" style:color
                 style:font-size="1.5rem" style:font-weight="bold" style:align-items="center">
                <img src={img} style:height={size}/>
                {name}
            </div>
        </Card>
    </div>
</a>


<style>

    .charicon-outer {
        transition: 0.15s;
    }

    .charicon-outer:hover {
        transform: scale(1.05);
    }

</style>
