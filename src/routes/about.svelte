<script>

    import img from '../assets/about.png'
    import Title from "../comps/common/Title.svelte";
    import Body from "../lib/Body.svelte";


    import MyOCs from "../comps/about/MyOCs.svelte";
    import AboutMe from "../comps/about/AboutMe.svelte";

</script>

<title>
    About Me - Teg Fox
</title>

<div>

    <Title {img} title="About Me!">
        Hobbyist artist and photographer, Full time bloo fock
    </Title>

    <Body>
        <AboutMe/>
    </Body>

    <Body>
        <MyOCs/>
    </Body>

</div>
