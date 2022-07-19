<script>
    import Title from "../common/Title.svelte";
    import Body from "../../lib/Body.svelte";
    import StackPanel from "../../lib/StackPanel.svelte";
    import CommInfoCard from "./CommInfoCard.svelte";

    export let info
    export let showTitleWhenSolo = false
</script>

<Title img={info.img} title={info.name} contain={info.contain}>
    {info.desc}
</Title>

<div style:margin-bottom="-3rem">
    <Body>
    {#each info.info ?? [] as comm}
        <!--I needed to wrap this in a div instead of using a stackpanel (flexbox) because images were overrunning their containers?-->
        <div style:margin="2rem 0">
            {#if (info.info ?? []).length > 1 || showTitleWhenSolo}
                <CommInfoCard info={comm}/>
            {:else}
                <CommInfoCard info={comm} includeTitleDesc={false} background="transparent" overlayBackground="transparent"/>
            {/if}
        </div>
    {/each}
    </Body>
</div>
