<script>
    import Title from "../common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
    import CommInfoCard from "../common/CommInfoCard.svelte";

    export let info
</script>

<Title img={info.img} title={info.name}>
    {info.desc}
</Title>

<Body>
    <StackPanel direction="column" gap="2rem">

        {#each info.info ?? [] as comm}

            <CommInfoCard info={comm}/>

        {/each}

    </StackPanel>
</Body>
