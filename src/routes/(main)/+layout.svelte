<script>
    import Header from "../../comps/header/Header.svelte";
    import Footer from "../../comps/footer/Footer.svelte";
    import PageTransition from "../../lib/PageTransition.svelte";
    import {page} from '$app/stores'


</script>

<header>
    <Header/>
</header>

<main >
    <PageTransition update={$page.data}>
        <slot/>
    </PageTransition>
</main>

<footer style="overflow-x: hidden">
    <Footer/>
</footer>

