<script>
    import Title from "../comps/Title.svelte";
    import img from '../assets/forest.png'
    import Body from "../Lib/Body.svelte";
    import Comms from "../comps/Comms.svelte";

    const tegGrey = '#192231'
</script>

<title>Teg Fox</title>

<main>
    <Title title="Welcome!" {img} height="95vh">
        Hey! I'm Teg, and I draw fluffy animals!
    </Title>


    <Body>
        <Comms status="open"/>
    </Body>
</main>
