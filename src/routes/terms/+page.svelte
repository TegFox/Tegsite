<script>
    import Title from "../../comps/common/Title.svelte";
    import img from '../../assets/terms.png'
    import Body from "../../lib/Body.svelte";
    import Card from "../../lib/Card.svelte";
    import TOS from "../../comps/terms/TOS.svelte";
    import FAQ from "../../comps/terms/FAQ.svelte";
</script>

<title>
    Terms of Service & FAQ - Teg Fox
</title>

<div>
    <Title {img} title="Terms of Service & FAQ">
        It's exactly what you think it is
    </Title>

    <TOS/>

    <FAQ/>

</div>
