<script>

    import Card from "../Lib/Card.svelte";

    export let img
    export let name
    export let size = '6rem'
    export let color = 'white'
    export let href
    export let background = '#00000088'

</script>


<a {href}>
    <Card {background} padding="2rem">
        <div style:display="flex" style:flex-direction="column" style:gap="0.5rem" style:color
             style:font-size="1.25rem" style:font-weight="bold" style:align-items="center">
            <img src={img} style:height={size}/>
            {name}
        </div>
    </Card>
</a>


<style>

    a {
        transition: 0.15s;
    }

    a:hover {
        transform: scale(1.05);
    }

</style>
