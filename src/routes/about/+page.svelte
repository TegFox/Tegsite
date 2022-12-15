<script>

    import img from '../../assets/about.png'
    import Title from "../../comps/common/Title.svelte";
    import Body from "../../lib/Body.svelte";


    import MyOCs from "../../comps/about/MyOCs.svelte";
    import AboutMe from "../../comps/about/AboutMe.svelte";
    import Links from "../../comps/about/Links.svelte";
    import AboutSite from "../../comps/about/AboutSite.svelte";
    import Card from "../../lib/Card.svelte";

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

<!--    <Body>-->
<!--        <Links/>-->
<!--    </Body>-->

    <Body>
        <MyOCs/>
    </Body>

    <AboutSite/>

</div>
