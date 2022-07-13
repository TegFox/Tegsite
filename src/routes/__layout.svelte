<script context="module">
    export const load = async ({ url }) => ({props: {url}})
</script>

<script>
    import Header from "../comps/header/Header.svelte";
    import '../app.css'
    import Footer from "../comps/footer/Footer.svelte";
    import PageTransition from "../lib/PageTransition.svelte";

    export let url
</script>

<header>
    <Header/>
</header>

<main >
    <PageTransition {url}>
        <slot/>
    </PageTransition>
</main>

<footer style="overflow-x: hidden">
    <Footer/>
</footer>

