<script>
    import Title from "../comps/Title.svelte";
    import img from '../assets/forest.png'
    import Body from "../Lib/Body.svelte";
    import Comms from "../comps/Comms.svelte";
</script>

<title>Teg Fox</title>

<main>
    <Title title="Yeah" {img}/>

    <Body>
        <Comms status="closed"/>
    </Body>
</main>
